import ErrorPage from '../components/error-page';
import Seo from '../components/seo';

export default function Custom404() {
  const title = 'Strona, której szukasz nie istnieje.';
  return (
    <>
      <Seo metaTitle={title} />
      <ErrorPage
        errorCode="404"
        title={title}
        description="Być może pomyliłeś adres, lub strona została przeniesiona pod inny inny adres. Jeśli uważasz, że to błąd, skontaktuj się z nami."
        href="/"
        buttonLabel="Powróć do strony głównej"
      />
    </>
  );
}
