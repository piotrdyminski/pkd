import { Pagination, Text } from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import Gallery from '../components/gallery';
import Page from '../components/page';
import { fetchAPI } from '../lib/api';
import { StrapiApiImage } from '../models/strapi';

const imagesPerPage = 24;
const fetchLimit = imagesPerPage + 1;

export default function GalleryPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const title = 'Galeria';
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: title }];
  const { images, page: currentPage } = props;

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
    <Page title={title} breadcrumbs={breadcrumbs} align="center">
      {!imageListSize ? (
        <Text>Brak dostępnych materiałów.</Text>
      ) : (
        <>
          <Gallery images={imagesList}></Gallery>
          <Pagination page={currentPage} total={totalPages} onChange={pageChanged} withEdges mt="xl" />
        </>
      )}
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<{ images: StrapiApiImage[]; page: number }> = async ({ query }) => {
  const defaultPageNumber = 1;
  let pageNumber = parseInt(query.strona as string) || defaultPageNumber;
  if (pageNumber <= 0) {
    pageNumber = defaultPageNumber;
  }
  // start api accepts values starting from '0'
  // pages values on the other hand will start from value '1'
  const start = (pageNumber - 1) * imagesPerPage;

  const images = await fetchAPI<StrapiApiImage[]>('/upload/files', {
    populate: ['image', 'images'],
    sort: ['createdAt:desc'],
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
