import { Text } from '@mantine/core';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Article from '../../components/article';
import Page from '../../components/page';
import Seo from '../../components/seo';
import { fetchAPI } from '../../lib/api';
import { getResponsiveImageUrl, getStrapiMedia } from '../../lib/media';
import { ArticleModel } from '../../models/article';
import { StrapiApiResponse } from '../../models/strapi';

export default function ArticlePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const article = props.article.data?.[0]?.attributes;
  const { title, description, image } = article ?? {};
  const imageObject = image?.data?.attributes;
  const breadcrumbs = [
    { label: 'Strona główna', href: '/' },
    { label: 'Z życia parafii', href: '/z-zycia-parafii' },
    ...(title ? [{ label: title }] : []),
  ];

  const articleContent = article ? (
    <Article article={article} categoryPath="/z-zycia-parafii" />
  ) : (
    <Text>Strona, której szukasz nie istnieje.</Text>
  );

  return (
    <>
      <Seo
        metaTitle={title}
        metaDescription={description}
        shareImage={imageObject && getStrapiMedia(getResponsiveImageUrl(imageObject, ['large']))}
        article
      />
      <Page breadcrumbs={breadcrumbs} align="center">
        {articleContent}
      </Page>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchAPI<StrapiApiResponse<ArticleModel>>('/articles', { fields: ['slug'] });

  const paths =
    articles.data?.map((article) => ({
      params: { slug: article.attributes.slug },
    })) ?? [];

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<{ article: StrapiApiResponse<ArticleModel> }> = async ({ params }) => {
  const article = await fetchAPI<StrapiApiResponse<ArticleModel>>('/articles', {
    populate: {
      image: { populate: '*' },
      images: {
        populate: '*',
        sort: ['createdAt:asc'],
      },
    },
    filters: {
      slug: {
        $eq: params?.slug,
      },
    },
  });
  return {
    props: { article },
  };
};
