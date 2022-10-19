import { createStyles, Stack, Text, Title } from '@mantine/core';
import Page from '../components/page';

const useStyles = createStyles(() => ({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },

  paddingRight: {
    paddingRight: 15,
  },

  fullWidth: {
    width: '100%',
  },
}));

export default function IntentionsPage() {
  const { classes } = useStyles();
  const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Intencje Mszalne' }];

  return (
    <Page title="Intencje Mszalne" breadcrumbs={breadcrumbs}>
      <Title order={4} align="center">
        XXVIII NIEDZIELA ZWYKŁA 16 października 2022 r.
      </Title>
      <Stack className={classes.fullWidth} align="flex-start">
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            7.00
          </Text>
          Za † Stefana Feliksę NABIELSKICH.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            9.00
          </Text>
          Dziękcz.- błag. w rocz. urodzin Marii Dzióbek, o zdrowie, Boże błogosławieństwo i potrzebne łaski - od dzieci
          z wnukami z Chicago.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            9.00
          </Text>
          Za † Juliannę Lucjana Krzysztofa KOT - od rodz. Kozińskich z Wojciechowa.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            10.30
          </Text>
          Za † Włodzimierza (rocz. śm.) Agnieszkę Aleksandrę CHMURÓW.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            10.30
          </Text>
          Za † Adelę Stanisława (13 rocz. m.) LUBERÓW.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            10.30
          </Text>
          Za † Michała RADOSZA - od rodz. Kozińskich z Krakowa.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            12.00
          </Text>
          Za † Dziękcz.- błag. w 25 rocz. ślubu Roberta i Katarzyny Pająk, o zdrowie, Boże błogosławieństwo i potrzebne
          łaski - od córki Dominiki Pająk.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            15:30
          </Text>{' '}
          <Text className={classes.paddingRight} weight={'bold'}>
            {' '}
            Różaniec{' '}
          </Text>
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            16.00
          </Text>
          Za † Janinę Bolesława LUBAŃSKICH, Jana Bogumiła WOJTASIKÓW.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            16.00
          </Text>
          Za † Piotra KWIETNIA (greg.).
        </Text>
      </Stack>

      <Title order={4} align="center">
        PONIEDZIAŁEK 17 października 2022 r. św. Ignacego Antiocheńskiego
      </Title>
      <Stack className={classes.fullWidth} align="flex-start">
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            7.00
          </Text>
          Za † Krystynę AUGUSTYN - od przyjaciół z ul. Kolejowej.
        </Text>
        <Text className={classes.flexRow}>
          <Text className={classes.paddingRight} weight={'bold'}>
            7.00
          </Text>
          Za † Stanisława WOJTASIKA - od syna Arkadiusza z rodz.
        </Text>
      </Stack>
    </Page>
  );
}
