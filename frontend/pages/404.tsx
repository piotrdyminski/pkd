import ErrorPage from '../components/error-page';

export default function Custom404() {
  return (
    <ErrorPage
      errorCode="404"
      title="Strona, której szukasz nie istnieje."
      description="Być może pomyliłeś adres, lub strona została przeniesiona pod inny inny adres. Jeśli uważasz, że to błąd, skontaktuj się z nami."
      href="/"
      buttonLabel="Powróć do strony głównej"
    />
  );
}
