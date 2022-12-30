import { AppShell, Box, createStyles } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import { useState } from 'react';
import AppFooter from './footer';
import AppHeader from './header';
import AppNavbar from './navbar';

const useStyles = createStyles((theme) => ({
  background: {
    background:
      'linear-gradient(to right, rgba(34, 139, 230, 0.2) 0%, white 10%, white 90%, rgba(34, 139, 230, 0.2) 100%)',
  },
  root: {
    maxWidth: '1280px',
    margin: 'auto',
    overflow: 'hidden',
    background: 'white',
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
    <Box className={classes.background}>
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
    </Box>
  );
}
