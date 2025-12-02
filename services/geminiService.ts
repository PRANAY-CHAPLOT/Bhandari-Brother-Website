import { GoogleGenAI, Type } from "@google/genai";
import { ImageSize, GroundingChunk } from "../types";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

// Helper to encode file to base64
export const fileToGenerativePart = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove data url prefix (e.g. "data:image/jpeg;base64,")
      const base64Data = base64String.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 1. Search Grounding
export const searchKnowledgeBase = async (query: string): Promise<{ text: string, sources: GroundingChunk[] }> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "No information found.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return { text, sources };
  } catch (error) {
    console.error("Search Error:", error);
    throw new Error("Failed to search knowledge base.");
  }
};

// 2. Maps Grounding
export const locateSuppliers = async (query: string, userLocation?: { lat: number, lng: number }): Promise<{ text: string, sources: GroundingChunk[] }> => {
  try {
    const config: any = {
      tools: [{ googleMaps: {} }],
    };

    if (userLocation) {
      config.toolConfig = {
        retrievalConfig: {
            latLng: {
                latitude: userLocation.lat,
                longitude: userLocation.lng
            }
        }
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
      config: config,
    });

    const text = response.text || "No location data found.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    return { text, sources };
  } catch (error) {
    console.error("Maps Error:", error);
    throw new Error("Failed to locate suppliers.");
  }
};

// 3. Image Generation (Nano Banana Pro)
export const generateIndustrialPrototype = async (prompt: string, size: ImageSize): Promise<string> => {
  try {
    // Check key selection for Veo/Imagen models as per guidelines (emulated here as we assume Env key)
    // In a real scenario with `gemini-3-pro-image-preview` requesting high res, paid tier checks happen.
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          imageSize: size,
          aspectRatio: "16:9" // Good for prototypes
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image generated.");
  } catch (error) {
    console.error("Generation Error:", error);
    throw new Error("Failed to generate prototype.");
  }
};

// 4. Image Editing (Nano Banana)
export const editIndustrialImage = async (imageBase64: string, mimeType: string, prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
            {
                inlineData: {
                    data: imageBase64,
                    mimeType: mimeType
                }
            },
            { text: prompt }
        ]
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No edited image returned.");
  } catch (error) {
    console.error("Editing Error:", error);
    throw new Error("Failed to edit image.");
  }
};
