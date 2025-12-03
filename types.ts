export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  image: string;
  price: string;
  description: string;
  features?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export enum AI_MODE {
  SEARCH = 'SEARCH',
  MAPS = 'MAPS',
  GENERATE = 'GENERATE',
  EDIT = 'EDIT'
}

export type ImageSize = '1K' | '2K' | '4K';

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: {
        reviewSnippets?: {
            content: string;
        }[]
    }
  };
}