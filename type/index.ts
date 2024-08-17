
import { StaticImageData } from 'next/image';
import { PATHS } from "@/constant";
export interface FormField {
  label: string;
  name: string;
  field: 'input' | 'textarea' | 'dropdown';
  required?: boolean | undefined;
  options?: string[] | undefined;
}

export interface Template {
    name: string;
    desc: string;
    aiPrompt: string;
    category: string;
    icon: StaticImageData | string;
    slug: string;
    form: FormField[];
} 
  
// @/type.ts
  // Import if using StaticImageData

export interface Templat {
  name: string;
  desc: string;
  aiPrompt: string;
  category: string;
  icon: StaticImageData | string;  // Adjust based on how icons are managed
  slug: string;
  form: {
    label: string;
    name: string;
    field: 'input' | 'textarea' | 'dropdown';
    required?: boolean;
    options?: string[];
  }[];
}


export type TNAVIITEM = {
  title: string;
  to: PATHS;
};

export type TFOOTERNAV = {
  [key: string]: TNAVIITEM[];
};
export type TSERVICE = {
  heading: string;
  image: StaticImageData | string |any
};
export type TTESTIMONIAL={

  name: string,
    review: string,
    rating: number,
 
}
export type TFAQS={
  question:string,
  answer:string
}
export type TCARDDATA = {
  thumbnail: StaticImageData | string;
  title: string;
  description: string;
};
export type TBESTSELLING = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
};

export type TSUBCARDDATA = {
  title: string;
  description: string;
  thumbnail: StaticImageData | string;
};