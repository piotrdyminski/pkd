import { Box, Button, createStyles, Divider, Group, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import mainImage from '../public/main-image.png';

const useStyles = createStyles((theme) => ({
  cover: {
    position: 'absolute',
    padding: `${theme.spacing.lg}px ${theme.spacing.lg}px 50px ${theme.spacing.lg}px`,
    height: '100%',
    background: 'transparent',
    zIndex: 1,
    color: 'white',
    textShadow: '0px 0px 10px rgba(0,0,0)',
    fontSize: '50px',
  },
  mainTitle: {
    fontSize: '45px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: '30px',
    },
    ['@media (max-width: 320px)']: {
      fontSize: '25px',
    },
  },
  subTitle: {
    fontSize: '35px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: '24px',
    },
    ['@media (max-width: 320px)']: {
      fontSize: '20px',
    },
  },
  coverButtons: {
    width: '100%',
    marginTop: 'auto',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '50px',
  },
  newsButton: {
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'rgba(34, 139, 230, 0.7)',
    },
  },
  intentionsButton: {
    color: theme.colors.gray[0],
    background: 'transparent',
    transition: '0.3s',
    '&:hover': {
      color: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
    },
  },
  divider: {
    width: '75%',
    alignSelf: 'center',
  },
  content: {
    padding: '40px',
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
}));

export default function IndexPage() {
  const { classes } = useStyles();

  return (
    <Stack>
      <Box sx={{ position: 'relative', minHeight: 552 }}>
        <Stack className={classes.cover} justify="flex-start" align="center">
          <Title order={1} className={classes.mainTitle} align="center">
            Parafia Rzymskokatolicka pw. Matki Bożej Fatimskiej
          </Title>
          <Title order={2} className={classes.subTitle} align="center">
            Kielce-Dyminy
          </Title>
          <Group className={classes.coverButtons} align="center">
            <Button className={classes.newsButton} size="xl">
              Ogłoszenia
            </Button>
            <Button className={classes.intentionsButton} variant="default" size="xl">
              Intencje mszalne
            </Button>
          </Group>
        </Stack>
        <Image
          src={mainImage}
          alt="Zdjęcie główne"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        ></Image>
      </Box>

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
      </Stack>
    </Stack>
  );
}
