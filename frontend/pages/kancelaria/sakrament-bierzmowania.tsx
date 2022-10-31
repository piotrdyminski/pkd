import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Page from '../../components/page';
import RichText from '../../components/rich-text';
import { fetchAPIOrDefault } from '../../lib/api';
import { SinglePageModel } from '../../models/single-page';
import { StrapiApiSingleResponse } from '../../models/strapi';

export default function ConfirmationPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = 'Sakrament Bierzmowania';
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Kancelaria' }, { label: title }];
  const { content = '' } = props.singlePageContent?.data?.attributes ?? {};

  return (
    <Page title={title} breadcrumbs={breadcrumbs}>
      <RichText html={content}></RichText>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<{
  singlePageContent: StrapiApiSingleResponse<SinglePageModel> | null;
}> = async () => ({
  props: {
    singlePageContent: await fetchAPIOrDefault<StrapiApiSingleResponse<SinglePageModel>>('/confirmation', {}),
  },
});