import { createStyles, Divider, Pagination, Text } from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import ArticlePreview from '../components/article-preview';
import Page from '../components/page';
import { fetchAPI } from '../lib/api';
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

  const articlePreviews = articles.map(({ attributes: article }, index) => (
    <>
      {index > 0 && <Divider className={classes.articleDivider} my="xl" size="xs" />}
      <ArticlePreview key={index} article={article} categoryPath="/z-zycia-parafii"></ArticlePreview>
    </>
  ));

  return (
    <Page title="Z życia parafii" breadcrumbs={breadcrumbs}>
      {articlePreviews.length ? articlePreviews : <Text>Strona, której szukasz nie istnieje.</Text>}
      <Pagination page={page} total={pageCount} onChange={pageChanged} withEdges mt="xl" />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<{ articles: StrapiApiResponse<ArticleModel> }> = async ({
  query,
}) => {
  const page = query.strona || 1;
  const articles = await fetchAPI<StrapiApiResponse<ArticleModel>>('/articles', {
    populate: ['image'],
    sort: ['publishedAt:desc'],
    pagination: { page, pageSize: 10 },
  });
  return {
    props: { articles },
  };
};
