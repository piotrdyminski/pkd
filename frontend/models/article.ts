import { StrapiApiBaseModel, StrapiApiImage, StrapiApiResponse, StrapiApiSingleResponse } from './strapi';

export type ArticleModel = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: StrapiApiSingleResponse<StrapiApiImage>;
  images: StrapiApiResponse<StrapiApiImage>;
} & StrapiApiBaseModel;
