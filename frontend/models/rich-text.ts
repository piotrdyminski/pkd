import { StrapiApiBaseModel } from './strapi';

export type RichTextModel = {
  content: string;
} & StrapiApiBaseModel;
