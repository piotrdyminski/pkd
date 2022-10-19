import Page from '../components/page';

export default function CemeteryPage() {
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Cmentarz Parafialny' }];

  return <Page title="Cmentarz Parafialny" breadcrumbs={breadcrumbs}></Page>;
}
