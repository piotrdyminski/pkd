import { StrapiApiImage } from '../models/strapi';
import { getStrapiURL } from './api';

export const getStrapiMedia = (url: string) => {
  return url.startsWith('/') ? getStrapiURL(url) : url;
};

export const getResponsiveImageUrl = (
  { url, formats }: StrapiApiImage,
  formatOrder: (keyof StrapiApiImage['formats'])[] = []
) => {
  const format = formatOrder.find((f) => formats?.[f]);
  return format ? formats?.[format]?.url : url;
};
