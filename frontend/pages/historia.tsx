import { Text } from '@mantine/core';
import Page from '../components/page';

export default function HistoryPage() {
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Historia Parafii' }];

  return (
    <Page title="Historia Parafii" breadcrumbs={breadcrumbs}>
      <Text>
        Początki nowej wspólnoty parafialnej w Dyminach, wydzielonej z parafii Suków i Chrystusa Króla w Kielcach to
        1986 r., gdy powstał samodzielny ośrodek duszpasterski. Parafię erygował bp Stanisław Szymecki 29 grudnia 1988
        r. Budowa kościoła w stanie surowym to lata 1988-1993. Konsekracji świątyni dokonał w Roku Jubileuszowym 2000 bp
        Kazimierz Ryczan. A gdyby głębiej sięgnąć do historii, trzeba by wspomnieć miejscowy obiekt kult - urokliwą,
        drewnianą kaplicę pw. Matki Bożej Częstochowskiej.
      </Text>
      <Text>
        Zachował się dokument erekcyjny tej publicznej kaplicy, wydany w 1810 r. Jest ona darzona sentymentem wiernych
        także z racji dramatycznych wydarzeń z czasów II wojny światowej, gdy Niemcy rozstrzelali tutaj grupkę osób,
        ocaleli zaś ci, którzy nie przerwali modlitwy... Serce starej kaplicy - czyli ołtarz Matki Bożej Częstochowskiej
        został odnowiony i umieszczony w bocznej nawie nowego kościoła. Kościół w Dyminach wraz z obiektami
        towarzyszącymi zaprojektowała Regina Kozakiewicz-Opałka. Jest ona także współprojektantką wnętrza, wraz z
        wykonawcą elementów wystroju art. rzeźbiarzem Stefanem Majem. W ołtarzu głównym znajduje się duża płaskorzeźba w
        stiuku, przedstawiająca Matkę Bożą Fatimską, w bocznych - Pan Jezus Miłosierny oraz ołtarz Matki Bożej
        Częstochowskiej. Ze stiuku wykonano także stacje Drogi Krzyżowej i tabernakulum. Posadzka z marmuru „biała
        mariann”, wreszcie ołtarz, ambonka, chrzcielnica zrobione z zielonego marmuru, uzupełniają wystrój wnętrza. W
        kościele znajdują się kolekcja pamiątek po Janie Pawle II.
      </Text>
    </Page>
  );
}
