import { GetStaticProps, InferGetStaticPropsType } from 'next';
import SinglePage from '../../components/single-page';
import { fetchAPIOrDefault } from '../../lib/api';
import { SinglePageModel } from '../../models/single-page';
import { StrapiApiSingleResponse } from '../../models/strapi';

export default function AltarBoysPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'Ministranci';
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Grupy parafialne' }, { label: title }];

  return <SinglePage title={title} breadcrumbs={breadcrumbs} singlePageResponse={props.response}></SinglePage>;
}

export const getStaticProps: GetStaticProps<{
  response: StrapiApiSingleResponse<SinglePageModel> | null;
}> = async () => ({
  props: {
    response: await fetchAPIOrDefault<StrapiApiSingleResponse<SinglePageModel>>('/altar-boy', {
      populate: ['image', 'images'],
    }),
  },
});
