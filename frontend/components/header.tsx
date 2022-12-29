import { Anchor, Burger, createStyles, Header, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import Logo from './logo';

type AppHeaderProps = {
  opened: boolean;
  toggleNavbar: () => void;
};

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    boxShadow: '0px -5px 15px 0px rgba(34, 139, 230, 0.7)',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: 'none',
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'initial',
    '&:hover': {
      textDecoration: 'none',
    },
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

export default function AppHeader({ opened, toggleNavbar }: AppHeaderProps) {
  const { classes } = useStyles();
  return (
    <Header className={classes.header} height={70} p="sm" fixed>
      <Burger opened={opened} onClick={toggleNavbar} size="sm" />
      <Link href="/" passHref>
        <Anchor component="a" className={classes.logo}>
          <Logo size={45} />
          <Stack spacing={0}>
            <Title order={5} className={classes.mainTitle}>
              Parafia Matki Bożej Fatimskiej
            </Title>
            <Title order={6} className={classes.subTitle}>
              Kielce-Dyminy
            </Title>
          </Stack>
        </Anchor>
      </Link>
    </Header>
  );
}
