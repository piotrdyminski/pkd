import Page from '../components/page';

export default function GalleryPage() {
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Galeria' }];

  return <Page title="Galeria" breadcrumbs={breadcrumbs}></Page>;
}
