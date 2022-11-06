import { GetStaticProps, InferGetStaticPropsType } from 'next';
import SinglePage from '../../components/single-page';
import { fetchAPIOrDefault } from '../../lib/api';
import { SinglePageModel } from '../../models/single-page';
import { StrapiApiSingleResponse } from '../../models/strapi';

export default function ConfirmationPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'Sakrament Bierzmowania';
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Kancelaria' }, { label: title }];

  return <SinglePage title={title} breadcrumbs={breadcrumbs} singlePageResponse={props.response}></SinglePage>;
}

export const getStaticProps: GetStaticProps<{
  response: StrapiApiSingleResponse<SinglePageModel> | null;
}> = async () => ({
  props: {
    response: await fetchAPIOrDefault<StrapiApiSingleResponse<SinglePageModel>>('/confirmation', {
      populate: ['image', 'images'],
    }),
  },
});
