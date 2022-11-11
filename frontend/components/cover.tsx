import { Carousel } from '@mantine/carousel';
import { Box, Button, createStyles, Divider, Group, Stack, Title } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import coverImages from '../const/cover-images';

const useStyles = createStyles((theme, _params, getRef) => ({
  cover: {
    gap: '25px',
  },
  coverBackground: {
    position: 'relative',
    minHeight: '552px',
  },
  coverTitle: {
    position: 'absolute',
    padding: `${theme.spacing.lg}px ${theme.spacing.lg}px 50px ${theme.spacing.lg}px`,
    height: '100%',
    width: '100%',
    background: 'transparent',
    zIndex: 1,
    color: 'white',
    textShadow: '0px 0px 10px rgba(0,0,0)',
    fontSize: '50px',
    pointerEvents: 'none',
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
  imageCarousel: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
  carouselControls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },
  coverButtons: {
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '50px',
    rowGap: '25px',
    '& > a': {
      width: '252px',
      padding: 0,
      transition: '0.3s',
    },
  },
  newsButton: {
    '&:hover': {
      backgroundColor: 'rgba(34, 139, 230, 0.7)',
    },
  },
  intentionsButton: {
    color: theme.colors.gray[8],
    background: 'transparent',
    '&:hover': {
      color: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
    },
  },
  liturgyButton: {
    borderColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
    '&:hover': {
      color: theme.colors.gray[8],
      backgroundColor: 'rgba(34, 139, 230, 0.2)',
    },
  },
  divider: {
    width: '75%',
    alignSelf: 'center',
  },
  height100: {
    height: '100%',
  },
}));

export function Cover() {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 15000, stopOnInteraction: false }));

  const carouselImages = coverImages.map((coverImage, index) => (
    <Carousel.Slide key={index}>
      <Image
        src={coverImage}
        alt="Zdjęcie na pokazie slajdów"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        unoptimized
        priority={index === 0}
      />
    </Carousel.Slide>
  ));

  return (
    <Stack className={classes.cover}>
      <Box className={classes.coverBackground}>
        <Stack className={classes.coverTitle} justify="flex-start" align="center">
          <Title order={1} className={classes.mainTitle} align="center">
            Parafia Rzymskokatolicka
            <br />
            pw. Matki Bożej Fatimskiej
          </Title>
          <Title order={2} className={classes.subTitle} align="center">
            Kielce-Dyminy
          </Title>
        </Stack>
        <Carousel
          classNames={{
            root: classes.imageCarousel,
            controls: classes.carouselControls,
            viewport: classes.height100,
            container: classes.height100,
          }}
          plugins={[autoplay.current]}
          onMouseDown={autoplay.current.reset}
          loop
        >
          {carouselImages}
        </Carousel>
      </Box>
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
        <Link href="/liturgia" passHref>
          <Button className={classes.liturgyButton} component="a" variant="light" size="xl">
            Liturgia
          </Button>
        </Link>
      </Group>
      <Divider className={classes.divider} size="sm" />
    </Stack>
  );
}
