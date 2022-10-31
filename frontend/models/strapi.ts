export type StrapiApiBaseModel = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiApiResponse<T extends StrapiApiBaseModel> = {
  data: StrapiApiData<T>[] | null;
  meta: StrapiApiMetadata;
};

export type StrapiApiSingleResponse<T extends StrapiApiBaseModel> = {
  data: StrapiApiData<T> | null;
  meta: StrapiApiMetadata;
};

export type StrapiApiData<T extends StrapiApiBaseModel> = {
  attributes: T;
};

export type StrapiApiMetadata = {
  pagination: StrapiApiPagination;
};

export type StrapiApiPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type StrapiApiImage = {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: StrapiApiImageFormats;
  hash: string;
  url: string;
} & StrapiApiBaseModel;

export type StrapiApiImageFormats = {
  thumbnail: StrapiApiImageFormat;
  small: StrapiApiImageFormat;
  medium: StrapiApiImageFormat;
  large: StrapiApiImageFormat;
};

export type StrapiApiImageFormat = {
  name: string;
  hash: string;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type StrapiWebhookEntryEvent = StrapiWebhookArticleEvent | StrapiWebhookSingleTypeEvent;

export type StrapiWebhookArticleEvent = {
  model: 'article';
  entry: { slug: string };
};

export type StrapiWebhookSingleTypeEvent = {
  model: 'other';
  entry: { page_slug: string };
};
