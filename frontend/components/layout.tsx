import { AppShell, createStyles } from '@mantine/core';
import { useState } from 'react';
import AppFooter from './footer';
import AppHeader from './header';
import AppNavbar from './navbar';

const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: '1200px',
    margin: 'auto',
  },
  body: {
    marginTop: '5px',
    borderTop: `1px solid ${theme.colors.gray[2]}`,
    borderLeft: `1px solid ${theme.colors.gray[2]}`,
    borderRight: `1px solid ${theme.colors.gray[2]}`,
  },
  main: {
    background: theme.colors.gray[0],
    padding: theme.spacing.lg,
  },
}));

export default function Layout({ children }: React.PropsWithChildren<unknown>) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      classNames={{
        root: classes.root,
        body: classes.body,
        main: classes.main,
      }}
      header={<AppHeader {...{ opened, setOpened }} />}
      navbar={<AppNavbar {...{ opened }} />}
      footer={<AppFooter />}
      navbarOffsetBreakpoint="sm"
      fixed={false}
    >
      {children}
    </AppShell>
  );
}
