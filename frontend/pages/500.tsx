import { useRouter } from 'next/router';
import ErrorPage from '../components/error-page';

export default function Custom500() {
  const router = useRouter();

  return (
    <ErrorPage
      errorCode="500"
      title="Ups..."
      description="Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę. Jeżeli problem nie ustępuje, skontaktuj się z nami."
      href={router.asPath}
      buttonLabel="Odśwież stronę"
    />
  );
}
