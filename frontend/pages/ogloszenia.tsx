import Page from '../components/page';

export default function NewsPage() {
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Ogłoszenia' }];

  return <Page title="Ogłoszenia" breadcrumbs={breadcrumbs}></Page>;
}
