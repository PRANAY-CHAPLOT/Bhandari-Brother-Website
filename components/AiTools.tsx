import React, { useState, useRef } from 'react';
import { Search, MapPin, Image as ImageIcon, Wand2, Loader2, Upload, ExternalLink } from 'lucide-react';
import { searchKnowledgeBase, locateSuppliers, generateIndustrialPrototype, editIndustrialImage, fileToGenerativePart } from '../services/geminiService.ts';
import { AI_MODE, ImageSize, GroundingChunk } from '../types.ts';

const AiTools: React.FC = () => {
  const [activeMode, setActiveMode] = useState<AI_MODE>(AI_MODE.SEARCH);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [resultText, setResultText] = useState('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [groundingSources, setGroundingSources] = useState<GroundingChunk[]>([]);
  
  // Image Generation State
  const [genSize, setGenSize] = useState<ImageSize>('1K');
  
  // Image Edit State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleAction = async () => {
    if (!input && activeMode !== AI_MODE.EDIT) return;
    if (activeMode === AI_MODE.EDIT && (!input || !selectedFile)) return;

    setLoading(true);
    setResultText('');
    setResultImage(null);
    setGroundingSources([]);

    try {
      if (activeMode === AI_MODE.SEARCH) {
        const data = await searchKnowledgeBase(input);
        setResultText(data.text);
        setGroundingSources(data.sources);
      } else if (activeMode === AI_MODE.MAPS) {
        // Simulating user location passed or letting backend default
        const data = await locateSuppliers(input);
        setResultText(data.text);
        setGroundingSources(data.sources);
      } else if (activeMode === AI_MODE.GENERATE) {
        const img = await generateIndustrialPrototype(input, genSize);
        setResultImage(img);
        setResultText("Prototype generated successfully.");
      } else if (activeMode === AI_MODE.EDIT && selectedFile) {
        const base64 = await fileToGenerativePart(selectedFile);
        const img = await editIndustrialImage(base64, selectedFile.type, input);
        setResultImage(img);
        setResultText("Image modification complete.");
      }
    } catch (err) {
      setResultText("An error occurred while processing your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 mt-12 mb-20 max-w-6xl mx-auto">
      <div className="bg-[#00157E] p-6 text-white flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Smart Industrial Hub</h2>
          <p className="text-blue-200 text-sm">Powered by Gemini AI</p>
        </div>
        <div className="flex space-x-2 bg-blue-900/50 p-1 rounded-xl">
          <button 
            onClick={() => { setActiveMode(AI_MODE.SEARCH); setResultText(''); setResultImage(null); }}
            className={`p-3 rounded-lg transition-all ${activeMode === AI_MODE.SEARCH ? 'bg-white text-[#00157E] shadow-md' : 'text-blue-200 hover:text-white'}`}
            title="Market Intelligence"
          >
            <Search size={20} />
          </button>
          <button 
             onClick={() => { setActiveMode(AI_MODE.MAPS); setResultText(''); setResultImage(null); }}
             className={`p-3 rounded-lg transition-all ${activeMode === AI_MODE.MAPS ? 'bg-white text-[#00157E] shadow-md' : 'text-blue-200 hover:text-white'}`}
             title="Logistics Locator"
          >
            <MapPin size={20} />
          </button>
          <button 
             onClick={() => { setActiveMode(AI_MODE.GENERATE); setResultText(''); setResultImage(null); }}
             className={`p-3 rounded-lg transition-all ${activeMode === AI_MODE.GENERATE ? 'bg-white text-[#00157E] shadow-md' : 'text-blue-200 hover:text-white'}`}
             title="Prototype Generator"
          >
            <ImageIcon size={20} />
          </button>
          <button 
             onClick={() => { setActiveMode(AI_MODE.EDIT); setResultText(''); setResultImage(null); }}
             className={`p-3 rounded-lg transition-all ${activeMode === AI_MODE.EDIT ? 'bg-white text-[#00157E] shadow-md' : 'text-blue-200 hover:text-white'}`}
             title="Design Modifier"
          >
            <Wand2 size={20} />
          </button>
        </div>
      </div>

      <div className="p-8 min-h-[400px]">
        {/* Controls Area */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-grow">
            {activeMode === AI_MODE.EDIT && (
               <div className="mb-4">
                 <label className="block text-sm font-medium text-slate-600 mb-2">Upload Reference Part</label>
                 <div className="flex items-center gap-4">
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition"
                    >
                        <Upload size={16} />
                        Choose File
                    </button>
                    <span className="text-sm text-slate-400">{selectedFile ? selectedFile.name : 'No file selected'}</span>
                 </div>
                 <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileChange}
                 />
                 {previewUrl && (
                     <div className="mt-4 relative w-32 h-32 rounded-lg overflow-hidden border border-slate-200">
                         <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                     </div>
                 )}
               </div>
            )}

            <label className="block text-sm font-medium text-slate-600 mb-2">
                {activeMode === AI_MODE.SEARCH ? 'Search Market Trends' : 
                 activeMode === AI_MODE.MAPS ? 'Find Suppliers/Partners' :
                 activeMode === AI_MODE.GENERATE ? 'Describe Component to Generate' :
                 'Modification Instructions (e.g. "Add a retro filter", "Make it gold")'}
            </label>
            <div className="flex gap-2">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={activeMode === AI_MODE.SEARCH ? "e.g., Latest alloy standards 2024" : 
                                 activeMode === AI_MODE.MAPS ? "e.g., Steel distributors in Mumbai" :
                                 "Type your query or prompt..."}
                    className="flex-grow p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#115FAD] focus:outline-none transition"
                />
                
                {activeMode === AI_MODE.GENERATE && (
                    <select 
                        value={genSize} 
                        onChange={(e) => setGenSize(e.target.value as ImageSize)}
                        className="p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#115FAD] focus:outline-none"
                    >
                        <option value="1K">1K</option>
                        <option value="2K">2K</option>
                        <option value="4K">4K</option>
                    </select>
                )}

                <button 
                    onClick={handleAction}
                    disabled={loading}
                    className="bg-[#115FAD] hover:bg-[#00157E] text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                >
                    {loading ? <Loader2 className="animate-spin" /> : 'Execute'}
                </button>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="bg-slate-50 rounded-2xl p-6 min-h-[200px] border border-slate-100">
            {loading ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                    <Loader2 className="animate-spin mb-4" size={32} />
                    <p>Processing Industrial Data...</p>
                </div>
            ) : !resultText && !resultImage ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 py-12">
                    <p>Select a tool and enter a prompt to begin.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Text Result */}
                    {resultText && (
                        <div className="prose max-w-none text-slate-700">
                            <h3 className="text-lg font-semibold text-[#00157E] mb-2">Analysis Result</h3>
                            <p className="whitespace-pre-wrap leading-relaxed">{resultText}</p>
                        </div>
                    )}

                    {/* Image Result */}
                    {resultImage && (
                        <div className="mt-6">
                             <h3 className="text-lg font-semibold text-[#00157E] mb-2">Visual Output</h3>
                             <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 inline-block">
                                <img src={resultImage} alt="AI Result" className="max-w-full h-auto max-h-[500px]" />
                             </div>
                        </div>
                    )}

                    {/* Grounding Sources (Search/Maps) */}
                    {groundingSources.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Sources & Locations</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {groundingSources.map((source, idx) => {
                                    const title = source.web?.title || source.maps?.title || "Unknown Source";
                                    const uri = source.web?.uri || source.maps?.uri || "#";
                                    const isMap = !!source.maps;

                                    return (
                                        <a 
                                            key={idx} 
                                            href={uri} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition group"
                                        >
                                            <div className={`p-2 rounded-full ${isMap ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                                                {isMap ? <MapPin size={16} /> : <ExternalLink size={16} />}
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-sm font-medium text-slate-800 truncate group-hover:text-[#115FAD]">{title}</p>
                                                <p className="text-xs text-slate-400 truncate">{uri}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AiTools;