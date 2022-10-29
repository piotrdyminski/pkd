import { StrapiApiBaseModel, StrapiApiImage, StrapiApiResponse, StrapiApiSingleResponse } from './strapi';

export type AdvancedPageModel = {
  content: string;
  image: StrapiApiSingleResponse<StrapiApiImage>;
  images: StrapiApiResponse<StrapiApiImage>;
} & StrapiApiBaseModel;
