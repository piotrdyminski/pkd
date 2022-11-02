import { Affix, Button, createStyles, Footer, Group, Text, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconAddressBook, IconArrowUp, IconMail, IconPhone } from '@tabler/icons';
import ContactTile from './contact-tile';

const useStyles = createStyles(() => ({
  footer: {
    padding: '50px 40px 20px 40px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'inset 0px 10px 15px -15px rgba(0, 0, 0, 0.1)',
  },

  contactContainer: {
    padding: '0 0 40px 0',
    justifyContent: 'space-around',
  },
}));

export default function AppFooter() {
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  const address = 'Sukowska 18, 25-146 Kielce';
  const phoneNumber = '665 628 759';
  const email = 'kancelaria@parafiakielcedyminy.pl';

  return (
    <>
      <Footer className={classes.footer} height="unset" withBorder={false}>
        <Group className={classes.contactContainer}>
          <ContactTile label={address} icon={IconAddressBook}></ContactTile>
          <ContactTile label={phoneNumber} icon={IconPhone}></ContactTile>
          <ContactTile label={email} icon={IconMail}></ContactTile>
        </Group>
        <Text size="xs" color="dimmed" align="center">
          Copyright © Parafia Kielce-Dyminy
        </Text>
      </Footer>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button leftIcon={<IconArrowUp size={16} />} style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              Przewiń w górę
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
