import { useRouter } from 'next/router';
import ErrorPage from '../components/error-page';
import Seo from '../components/seo';

export default function Custom500() {
  const router = useRouter();
  const title = 'Ups...';
  return (
    <>
      <Seo metaTitle={title} />
      <ErrorPage
        errorCode="500"
        title={title}
        description="Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę. Jeżeli problem nie ustępuje, skontaktuj się z nami."
        href={router.asPath}
        buttonLabel="Odśwież stronę"
      />
    </>
  );
}
