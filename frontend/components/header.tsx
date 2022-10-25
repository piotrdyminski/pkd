import { Burger, createStyles, Header, MediaQuery, Stack, Title } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import { Dispatch, SetStateAction } from 'react';
import Logo from './logo';

type AppHeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0px -5px 15px 0px rgba(34, 139, 230, 0.7)',
  },
  mainTitle: {
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: theme.fontSizes.sm,
    },
  },
  subTitle: {
    color: theme.colors.gray[7],
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: theme.fontSizes.xs,
    },
  },
}));

export default function AppHeader({ opened, setOpened }: AppHeaderProps) {
  const { classes } = useStyles();
  const [, setScrollLocked] = useScrollLock();

  const burgerClicked = () => {
    setOpened((o) => !o);
    setScrollLocked((l) => !l);
  };

  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Header className={classes.header} height={70} p="sm" fixed>
        <Burger opened={opened} onClick={burgerClicked} size="sm" />
        <Logo />
        <Stack spacing={0}>
          <Title order={5} className={classes.mainTitle}>
            Parafia Matki Bożej Fatimskiej
          </Title>
          <Title order={6} className={classes.subTitle}>
            Kielce-Dyminy
          </Title>
        </Stack>
      </Header>
    </MediaQuery>
  );
}
