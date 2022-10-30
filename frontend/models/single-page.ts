import { StrapiApiBaseModel, StrapiApiImage, StrapiApiResponse, StrapiApiSingleResponse } from './strapi';

export type SinglePageModel = {
  content: string;
  page_slug: string;
} & StrapiApiBaseModel;

export type AdvancedSinglePageModel = {
  image: StrapiApiSingleResponse<StrapiApiImage>;
  images: StrapiApiResponse<StrapiApiImage>;
} & SinglePageModel;
