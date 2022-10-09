import { useState } from 'react';

import { AppShell, Burger, Footer, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';

export default function Layout({ children }: React.PropsWithChildren<unknown>) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      fixed={false}
      styles={{
        root: {
          maxWidth: '1600px',
          margin: 'auto',
          borderLeft: `1px solid ${theme.colors.gray[2]}`,
          borderRight: `1px solid ${theme.colors.gray[2]}`,
        },
        main: {
          background: theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} fixed={false} width={{ sm: 200, lg: 300 }}>
          <Text>Panel boczny</Text>
        </Navbar>
      }
      footer={
        <Footer height={60} fixed={false} p="md">
          Stopka
        </Footer>
      }
      header={
        <Header height={70} fixed={false} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>Parafia Kielce - Dyminy</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
