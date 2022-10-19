import { StrapiApiImage, StrapiApiSingleResponse } from '../models/strapi';
import { getStrapiURL } from './api';

export const getStrapiMedia = (media: StrapiApiSingleResponse<StrapiApiImage>) => {
  const { url } = media.data.attributes;
  return url.startsWith('/') ? getStrapiURL(url) : url;
};
