import { StrapiApiBaseModel, StrapiApiImage, StrapiApiResponse, StrapiApiSingleResponse } from './strapi';

export type ArticleModel = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: StrapiApiSingleResponse<StrapiApiImage> | null;
  images: StrapiApiResponse<StrapiApiImage> | null;
} & StrapiApiBaseModel;
