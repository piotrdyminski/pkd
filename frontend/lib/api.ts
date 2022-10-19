import qs from 'qs';

export const getStrapiURL = (path = '') =>
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`;

export const fetchAPI = async <T>(
  path: string,
  urlParamsObject: object = { populate: '*' },
  options = {}
): Promise<T> => {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.NEXT_STRAPI_API_TOKEN}`,
    },
    ...options,
  };

  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;

  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error('An error occurred please try again');
  }
  return await response.json();
};
