import { Stack } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { getStrapiMedia } from '../lib/media';
import { SinglePageModel } from '../models/single-page';
import { StrapiApiSingleResponse } from '../models/strapi';
import Gallery from './gallery';
import Page from './page';
import RichText from './rich-text';

type SinglePageProps = {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  singlePageResponse: StrapiApiSingleResponse<SinglePageModel> | null;
};

export default function SinglePage({
  title,
  breadcrumbs,
  singlePageResponse,
}: React.PropsWithChildren<SinglePageProps>) {
  const { content = '', image, images } = singlePageResponse?.data?.attributes ?? {};
  const imagesList = images?.data?.map(({ attributes }) => attributes) ?? [];
  const { url = '', alternativeText = '', width, height } = image?.data?.attributes ?? {};

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      {url && (
        <Stack align="center">
          <Image src={getStrapiMedia(url)} alt={alternativeText} width={width} height={height} quality={100}></Image>
        </Stack>
      )}
      <RichText html={content}></RichText>
      {imagesList.length > 0 && <Gallery images={imagesList}></Gallery>}
    </Page>
  );
}
