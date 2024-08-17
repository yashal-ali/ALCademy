import { BookOpen, Briefcase, ClipboardList, FileSearch, FlaskConical, Languages, NotebookPen, Pencil, Presentation, ShieldCheck } from "lucide-react";

type TemplateCategory =
  | 'Blog'
  | 'Research Paper'
  | 'Presentation'
  | 'Lab Report'
  | 'Study Guide'
  | 'Essay'
  | 'Creative Writing'
  | 'Languages'
  | 'Academic Integrity'
  | 'Professional Development';

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
    category: TemplateCategory;
    icon: string | typeof BookOpen | typeof Briefcase | typeof ClipboardList | typeof FileSearch | typeof FlaskConical | typeof Languages | typeof NotebookPen | typeof Pencil | typeof Presentation | typeof ShieldCheck;
    slug: string;
    form: FormField[];
  }
  

import { PATHS } from "@/constant";
import { StaticImageData } from "next/image";
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