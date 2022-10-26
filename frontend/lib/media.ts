import { StrapiApiImage } from '../models/strapi';
import { getStrapiURL } from './api';

export const getStrapiMedia = (url: string) => {
  return url.startsWith('/') ? getStrapiURL(url) : url;
};

export const getResponsiveImageUrl = ({ url, formats }: StrapiApiImage) =>
  formats?.small?.url ?? formats?.thumbnail?.url ?? url;
