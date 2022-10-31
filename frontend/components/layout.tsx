import { AppShell, createStyles } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import { useState } from 'react';
import AppFooter from './footer';
import AppHeader from './header';
import AppNavbar from './navbar';

const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: '1280px',
    margin: 'auto',
    overflow: 'hidden',
  },
  body: {
    paddingBottom: '30px',
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },
  main: {
    minHeight: '600px',
    padding: 0,
    [`@media (max-width: ${theme.breakpoints.md - 1}px)`]: {
      marginTop: '70px',
    },
  },
}));

export default function Layout({ children }: React.PropsWithChildren<unknown>) {
  const { classes } = useStyles();
  const [opened, setNavbarOpened] = useState(false);
  const [, setScrollLocked] = useScrollLock();

  const toggleNavbar = () => {
    setNavbarOpened((o) => !o);
    setScrollLocked((l) => !l);
  };

  const closeNavbar = () => {
    setNavbarOpened(false);
    setScrollLocked(false);
  };

  return (
    <AppShell
      classNames={{
        root: classes.root,
        body: classes.body,
        main: classes.main,
      }}
      header={<AppHeader {...{ opened, toggleNavbar }} />}
      navbar={<AppNavbar {...{ opened, closeNavbar }} />}
      footer={<AppFooter />}
      fixed={false}
    >
      {children}
    </AppShell>
  );
}
