import { createStyles, Divider, Pagination, Text } from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import ArticlePreview from '../components/article-preview';
import Page from '../components/page';
import { fetchAPI } from '../lib/api';
import { parsePageNumber } from '../lib/utils';
import { ArticleModel } from '../models/article';
import { StrapiApiResponse } from '../models/strapi';

const useStyles = createStyles(() => ({
  articleDivider: {
    width: '100%',
  },
}));

export default function ArticlesPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { classes } = useStyles();
  const router = useRouter();
  const { data: articles, meta } = props.articles;
  const { page, pageCount } = meta.pagination;
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Z życia parafii' }];

  const pageChanged = (page: number) => {
    router.push(`/z-zycia-parafii?strona=${page}`);
  };

  const articlePreviews =
    articles?.map(({ attributes: article }, index) => (
      <React.Fragment key={index}>
        {index > 0 && <Divider className={classes.articleDivider} my="xl" size="xs" />}
        <ArticlePreview article={article} categoryPath="/z-zycia-parafii"></ArticlePreview>
      </React.Fragment>
    )) ?? [];

  return (
    <Page title="Z życia parafii" breadcrumbs={breadcrumbs} align="center">
      {articlePreviews.length > 0 ? (
        <>
          {articlePreviews}
          <Pagination page={page} total={pageCount} onChange={pageChanged} withEdges mt="xl" />
        </>
      ) : (
        <Text>Brak dostępnych artykułów.</Text>
      )}
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<{ articles: StrapiApiResponse<ArticleModel> }> = async ({
  query,
}) => {
  const page = parsePageNumber(query.strona);
  const articles = await fetchAPI<StrapiApiResponse<ArticleModel>>('/articles', {
    populate: ['image'],
    sort: ['publishedAt:desc'],
    pagination: { page, pageSize: 10 },
  });
  return {
    props: { articles },
  };
};
