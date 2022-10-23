import { Burger, createStyles, Group, Header, MediaQuery, Stack, Title } from '@mantine/core';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import headerIcon from '../public/header-icon.png';
import HeaderBackgroundImage from './header-background-image';

type AppHeaderProps = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

const useStyles = createStyles(() => ({
  header: {
    position: 'relative',
    border: 0,
  },
  headerIcon: {
    zIndex: 1,
  },
  headerTitle: {
    zIndex: 1,
  },
  burger: {
    zIndex: 1,
  },
}));

export default function AppHeader({ opened, setOpened }: AppHeaderProps) {
  const { classes } = useStyles();

  return (
    <Header className={classes.header} height={70} p="sm">
      <Group>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger className={classes.burger} opened={opened} onClick={() => setOpened((o) => !o)} size="sm" />
        </MediaQuery>
        <div style={{ height: 38, width: 38 }}>
          <Image className={classes.headerIcon} src={headerIcon} alt="Header icon"></Image>
        </div>
        <Stack className={classes.headerTitle} spacing={0}>
          <Title order={5}>Parafia Matki Bożej Fatimskiej</Title>
          <Title order={6}>Kielce-Dyminy</Title>
        </Stack>
      </Group>
      <HeaderBackgroundImage />
    </Header>
  );
}
