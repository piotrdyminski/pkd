import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Article from '../../components/article';
import Page from '../../components/page';
import { fetchAPI } from '../../lib/api';
import { ArticleModel } from '../../models/article';
import { StrapiApiResponse } from '../../models/strapi';

export default function ArticlePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const article = props.article.data[0].attributes;
  const breadcrumbs = [
    { label: 'Strona główna', href: '/' },
    { label: 'Z życia parafii', href: '/z-zycia-parafii' },
    { label: article.title },
  ];

  return (
    <Page breadcrumbs={breadcrumbs}>
      <Article article={article} categoryPath="/z-zycia-parafii" />
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchAPI<StrapiApiResponse<ArticleModel>>('/articles', { fields: ['slug'] });

  const paths = articles.data.map((article) => ({
    params: { slug: article.attributes.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<{ article: StrapiApiResponse<ArticleModel> }> = async ({ params }) => {
  const article = await fetchAPI<StrapiApiResponse<ArticleModel>>('/articles', {
    filters: {
      slug: {
        $eq: params?.slug,
      },
    },
    populate: '*',
  });

  return {
    props: { article },
  };
};