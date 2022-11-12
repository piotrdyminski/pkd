import { AspectRatio, createStyles } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { getResponsiveImageUrl, getStrapiMedia } from '../lib/media';
import { SinglePageModel } from '../models/single-page';
import { StrapiApiSingleResponse } from '../models/strapi';
import Gallery from './gallery';
import Page from './page';
import RichText from './rich-text';
import Seo from './seo';

type SinglePageProps = {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  singlePageResponse: StrapiApiSingleResponse<SinglePageModel> | null;
};

const useStyles = createStyles(() => ({
  mainImageWrapper: {
    maxHeight: '600px',
    position: 'relative',
    pointerEvents: 'none',
  },
}));

export default function SinglePage({
  title,
  breadcrumbs,
  singlePageResponse,
}: React.PropsWithChildren<SinglePageProps>) {
  const { classes } = useStyles();
  const { content = '', image, images } = singlePageResponse?.data?.attributes ?? {};
  const imageObject = image?.data?.attributes;
  const imagesList = images?.data?.map(({ attributes }) => attributes) ?? [];
  const { alternativeText = '', width = 0, height = 0 } = imageObject ?? {};

  return (
    <>
      <Seo
        metaTitle={title}
        shareImage={imageObject && getStrapiMedia(getResponsiveImageUrl(imageObject, ['large']))}
        article
      />
      <Page title={title} breadcrumbs={breadcrumbs}>
        {imageObject && (
          <AspectRatio ratio={width / height} className={classes.mainImageWrapper}>
            <Image
              src={getStrapiMedia(getResponsiveImageUrl(imageObject, ['large']))}
              alt={alternativeText}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              unoptimized
            />
          </AspectRatio>
        )}
        <RichText html={content}></RichText>
        {imagesList.length > 0 && <Gallery images={imagesList}></Gallery>}
      </Page>
    </>
  );
}
