import { createStyles, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ArticleCard } from '../components/article-card';
import { Cover } from '../components/cover';
import { fetchAPI } from '../lib/api';
import { ArticleModel } from '../models/article';
import { StrapiApiResponse } from '../models/strapi';

const useStyles = createStyles((theme) => ({
  divider: {
    width: '75%',
    alignSelf: 'center',
  },
  content: {
    padding: '40px',
    alignItems: 'center',
    gap: '60px',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '30px',
    },
  },
  mainText: {
    alignItems: 'flex-start',
    gap: '30px',
    textAlign: 'justify',
    textJustify: 'inter-word',
    '& > *': {
      flex: 1,
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'block',
    },
  },
  firstParagraph: {
    '&:first-letter': {
      fontFamily: 'Cinzel, serif',
      fontSize: '46px',
      fontWeight: 700,
      border: '3px solid',
      float: 'left',
      padding: '24px 18px',
      margin: '10px 14px 0 0',
      lineHeight: '36px',
      boxSizing: 'border-box',
      textTransform: 'uppercase',
    },
  },
  articlePreview: {
    width: '100%',
    alignItems: 'center',
  },
  articleCards: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
}));

export default function IndexPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { classes } = useStyles();
  const { data: articles } = props.articles;

  const articleCards =
    articles?.map(({ attributes: article }, index) => <ArticleCard key={index} article={article} />) ?? [];

  return (
    <Stack>
      <Cover />
      <Divider className={classes.divider} size="sm" />
      <Stack className={classes.content}>
        <Group className={classes.mainText}>
          <Text className={classes.firstParagraph} inherit>
            Początki nowej wspólnoty parafialnej w Dyminach, wydzielonej z parafii Suków i Chrystusa Króla w Kielcach to
            1986 r., gdy powstał samodzielny ośrodek duszpasterski. Parafię erygował bp Stanisław Szymecki 29 grudnia
            1988 r. Budowa kościoła w stanie surowym to lata 1988-1993. Konsekracji świątyni dokonał w Roku
            Jubileuszowym 2000 bp Kazimierz Ryczan. A gdyby głębiej sięgnąć do historii, trzeba by wspomnieć miejscowy
            obiekt kult - urokliwą, drewnianą kaplicę pw. Matki Bożej Częstochowskiej. Zachował się dokument erekcyjny
            tej publicznej kaplicy, wydany w 1810 r. Jest ona darzona sentymentem wiernych także z racji dramatycznych
            wydarzeń z czasów II wojny światowej, gdy Niemcy rozstrzelali tutaj grupkę osób, ocaleli zaś ci, którzy nie
            przerwali modlitwy...
          </Text>
          <Text inherit>
            Serce starej kaplicy - czyli ołtarz Matki Bożej Częstochowskiej został odnowiony i umieszczony w bocznej
            nawie nowego kościoła. Kościół w Dyminach wraz z obiektami towarzyszącymi zaprojektowała Regina
            Kozakiewicz-Opałka. Jest ona także współprojektantką wnętrza, wraz z wykonawcą elementów wystroju art.
            rzeźbiarzem Stefanem Majem. W ołtarzu głównym znajduje się duża płaskorzeźba w stiuku, przedstawiająca Matkę
            Bożą Fatimską, w bocznych - Pan Jezus Miłosierny oraz ołtarz Matki Bożej Częstochowskiej. Ze stiuku wykonano
            także stacje Drogi Krzyżowej i tabernakulum. Posadzka z marmuru „biała mariann”, wreszcie ołtarz, ambonka,
            chrzcielnica zrobione z zielonego marmuru, uzupełniają wystrój wnętrza. W kościele znajdują się kolekcja
            pamiątek po Janie Pawle II.
          </Text>
        </Group>
        {articleCards.length > 0 && (
          <Stack className={classes.articlePreview} spacing="xl">
            <Title order={1}>Z życia parafii</Title>
            <Group className={classes.articleCards}>{articleCards}</Group>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export const getStaticProps: GetStaticProps<{ articles: StrapiApiResponse<ArticleModel> }> = async () => {
  const articles = await fetchAPI<StrapiApiResponse<ArticleModel>>('/articles', {
    populate: ['image'],
    sort: ['publishedAt:desc'],
    pagination: { start: 0, limit: 2 },
  });
  return {
    props: { articles },
  };
};
