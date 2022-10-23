import { getStrapiURL } from './api';

export const getStrapiMedia = (url: string) => {
  return url.startsWith('/') ? getStrapiURL(url) : url;
};
