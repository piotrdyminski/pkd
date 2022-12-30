import { Anchor, createStyles, Divider, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import Logo from './logo';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
    [`@media (max-width: ${theme.breakpoints.md - 1}px)`]: {
      display: 'none',
    },
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '10px',
    color: 'initial',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  mainTitle: { textDecoration: 'none' },
  subTitle: {
    color: theme.colors.gray[7],
  },
  divider: {
    width: '75%',
    marginTop: '20px',
  },
}));

export default function NavbarHeader() {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <Link href="/" passHref>
        <Anchor component="a" className={classes.logo}>
          <Logo size={100} />
          <Stack spacing={0}>
            <Title order={3} className={classes.mainTitle}>
              Parafia Matki Bożej Fatimskiej
            </Title>
            <Title order={4} className={classes.subTitle}>
              Kielce-Dyminy
            </Title>
          </Stack>
        </Anchor>
      </Link>
      <Divider className={classes.divider} my={0} size="sm" />
    </header>
  );
}
