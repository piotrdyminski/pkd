import { Stack } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Gallery from '../components/gallery';
import Page from '../components/page';
import RichText from '../components/rich-text';
import { fetchAPIOrDefault } from '../lib/api';
import { getStrapiMedia } from '../lib/media';
import { AdvancedPageModel } from '../models/advanced-page';
import { StrapiApiSingleResponse } from '../models/strapi';

export default function HistoryPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'Historia Parafii';
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: title }];
  const { content = '', image, images } = props.advancedPageContent?.data?.attributes ?? {};
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

export const getStaticProps: GetStaticProps<{
  advancedPageContent: StrapiApiSingleResponse<AdvancedPageModel> | null;
}> = async () => ({
  props: {
    advancedPageContent: await fetchAPIOrDefault<StrapiApiSingleResponse<AdvancedPageModel>>('/history', {
      populate: ['image', 'images'],
    }),
  },
});
