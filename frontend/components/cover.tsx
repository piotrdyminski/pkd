import { Box, Button, createStyles, Group, Stack, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import coverImage from '../public/cover-image.png';

const useStyles = createStyles((theme) => ({
  cover: {
    position: 'relative',
    minHeight: 552,
  },
  coverElements: {
    position: 'absolute',
    padding: `${theme.spacing.lg}px ${theme.spacing.lg}px 50px ${theme.spacing.lg}px`,
    height: '100%',
    background: 'transparent',
    zIndex: 1,
    color: 'white',
    textShadow: '0px 0px 10px rgba(0,0,0)',
    fontSize: '50px',
  },
  mainTitle: {
    fontSize: '45px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: '30px',
    },
    ['@media (max-width: 320px)']: {
      fontSize: '25px',
    },
  },
  subTitle: {
    fontSize: '35px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: '24px',
    },
    ['@media (max-width: 320px)']: {
      fontSize: '20px',
    },
  },
  coverButtons: {
    width: '100%',
    marginTop: 'auto',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '50px',
  },
  newsButton: {
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'rgba(34, 139, 230, 0.7)',
    },
  },
  intentionsButton: {
    color: theme.colors.gray[0],
    background: 'transparent',
    transition: '0.3s',
    '&:hover': {
      color: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
      textShadow: 'none',
    },
  },
}));

export function Cover() {
  const { classes } = useStyles();
  return (
    <Box className={classes.cover}>
      <Stack className={classes.coverElements} justify="flex-start" align="center">
        <Title order={1} className={classes.mainTitle} align="center">
          Parafia Rzymskokatolicka pw. Matki Bożej Fatimskiej
        </Title>
        <Title order={2} className={classes.subTitle} align="center">
          Kielce-Dyminy
        </Title>
        <Group className={classes.coverButtons} align="center">
          <Link href="/ogloszenia-duszpasterskie" passHref>
            <Button className={classes.newsButton} component="a" size="xl">
              Ogłoszenia
            </Button>
          </Link>
          <Link href="/intencje-mszalne" passHref>
            <Button className={classes.intentionsButton} component="a" variant="default" size="xl">
              Intencje mszalne
            </Button>
          </Link>
        </Group>
      </Stack>
      <Image
        src={coverImage}
        alt="Zdjęcie kościoła"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
      />
    </Box>
  );
}
