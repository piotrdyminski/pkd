import { Anchor, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { ArticleCard } from '../components/article-card';
import { Cover } from '../components/cover';
import Seo from '../components/seo';
import { mainImage } from '../const/cover-images';
import { fetchAPI } from '../lib/api';
import { ArticleModel } from '../models/article';
import { StrapiApiResponse } from '../models/strapi';

const useStyles = createStyles((theme) => ({
  content: {
    padding: '40px',
    alignItems: 'center',
    gap: '60px',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '30px',
    },
  },
  description: {
    textAlign: 'justify',
    textJustify: 'inter-word',
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
  articlePreviewLink: {
    lineHeight: 1.35,
    fontFamily: 'inherit',
    color: 'inherit',
    '&:hover': {
      color: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
    },
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
  const description = `Początki nowej wspólnoty parafialnej w Dyminach, wydzielonej z parafii Suków i Chrystusa Króla w Kielcach to \
1986 r., gdy powstał samodzielny ośrodek duszpasterski. Parafię erygował bp Stanisław Szymecki 29 grudnia 1988 \
r. Budowa kościoła w stanie surowym to lata 1988-1993. Konsekracji świątyni dokonał w Roku Jubileuszowym 2000 \
bp Kazimierz Ryczan. W ołtarzu głównym znajduje się duża płaskorzeźba w stiuku, przedstawiająca Matkę Bożą \
Fatimską, w bocznych - Pan Jezus Miłosierny oraz ołtarz Matki Bożej Częstochowskiej. Ze stiuku wykonano także \
stacje Drogi Krzyżowej i tabernakulum. Posadzka z marmuru „biała mariann”, wreszcie ołtarz, ambonka, \
chrzcielnica zrobione z zielonego marmuru, uzupełniają wystrój wnętrza. W kościele znajduje się kolekcja \
pamiątek po Janie Pawle II. Przy świątyni widnieje grota poświęcona Matce Bożej.`;

  const articleCards =
    articles?.map(({ attributes: article }, index) => <ArticleCard key={index} article={article} />) ?? [];

  return (
    <>
      <Seo metaDescription={description} shareImage={mainImage.src} />
      <Stack>
        <Cover />
        <Stack className={classes.content}>
          <Text className={classes.description} inherit>
            {description}
          </Text>
          {articleCards.length > 0 && (
            <Stack className={classes.articlePreview} spacing="xl">
              <Title order={1} align="center">
                <Link href="/z-zycia-parafii" passHref>
                  <Anchor component="a" className={classes.articlePreviewLink} underline={false}>
                    Z życia parafii
                  </Anchor>
                </Link>
              </Title>
              <Group className={classes.articleCards}>{articleCards}</Group>
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
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
