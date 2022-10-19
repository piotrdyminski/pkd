import { Stack, Text } from '@mantine/core';
import Page from '../components/page';

export default function InfoPage() {
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Dane Parafii' }];

  return (
    <Page title="Dane Parafii" breadcrumbs={breadcrumbs}>
      <Stack align={'flex-start'}>
        <Text weight={'bold'}>Adres:</Text>
        <Text> 25-146 Kielce, ul. Sukowska 18 </Text>
        <Text> tel. 41-362-29-00 </Text>
        <Text> liczba mieszkańców: 1 850 </Text>

        <Text weight={'bold'}>Administrator:</Text>
        <Text> ks. Adam Rosochacki, mgr lic. teol., ur. 1978 (Krzcięcice), wyśw. 2003, mian. 2022 </Text>

        <Text weight={'bold'}>Rezydent:</Text>
        <Text> ks. Tadeusz Szeląg, KHK, ur. 1951 (Słupia Nadbrzeżna - diec. sandomierska), wyśw. 1975, od 2022 </Text>
      </Stack>
    </Page>
  );
}
