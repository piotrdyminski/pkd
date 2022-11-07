import { StrapiApiBaseModel, StrapiApiImage, StrapiApiResponse, StrapiApiSingleResponse } from './strapi';

export type SinglePageModel = {
  content: string;
  page_slug: string;
  image: StrapiApiSingleResponse<StrapiApiImage>;
  images: StrapiApiResponse<StrapiApiImage>;
} & StrapiApiBaseModel;
