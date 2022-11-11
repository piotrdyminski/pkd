import { Pagination, Text } from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Gallery from '../components/gallery';
import Page from '../components/page';
import Seo from '../components/seo';
import { fetchAPI } from '../lib/api';
import { parsePageNumber } from '../lib/utils';
import { StrapiApiImage } from '../models/strapi';

const imagesPerPage = 24;
const fetchLimit = imagesPerPage + 1;

export default function GalleryPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { images, page: currentPage } = props;
  const title = 'Galeria';
  const metaTitle = currentPage > 1 ? `${title} (strona ${currentPage})` : title;
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: title }];

  const pageChanged = (page: number) => {
    router.push(`/galeria?strona=${page}`);
  };

  let totalPages = currentPage;
  let imagesList = images ?? [];
  const imageListSize = imagesList.length;

  if (imageListSize === fetchLimit) {
    imagesList = imagesList.slice(0, -1);
    totalPages = currentPage + 1;
  }

  return (
    <>
      <Seo metaTitle={metaTitle} />
      <Page title={title} breadcrumbs={breadcrumbs} align="center">
        {imageListSize > 0 ? (
          <>
            <Gallery images={imagesList}></Gallery>
            <Pagination page={currentPage} total={totalPages} onChange={pageChanged} withEdges mt="xl" />
          </>
        ) : (
          <Text>Brak dostępnych materiałów.</Text>
        )}
      </Page>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ images: StrapiApiImage[]; page: number }> = async ({ query }) => {
  const pageNumber = parsePageNumber(query.strona);
  // start api accepts values starting from '0'
  // pages values on the other hand will start from value '1'
  const start = (pageNumber - 1) * imagesPerPage;

  const images = await fetchAPI<StrapiApiImage[]>('/upload/files', {
    populate: ['image', 'images'],
    sort: ['createdAt:desc'],
    filters: {
      folder: {
        name: {
          $eq: 'Galeria', // fetches images only from 'Galeria' folder
        },
      },
    },
    start: start,
    limit: fetchLimit,
  });

  return {
    props: {
      images,
      page: pageNumber,
    },
  };
};
