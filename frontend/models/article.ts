import { StrapiApiBaseModel, StrapiApiImage, StrapiApiSingleResponse } from './strapi';

export type ArticleModel = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: StrapiApiSingleResponse<StrapiApiImage>;
} & StrapiApiBaseModel;
