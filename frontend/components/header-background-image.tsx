import { createStyles, MediaQuery } from '@mantine/core';
import Image, { ImageProps } from 'next/image';
import headerBackgroundImageSmall from '../public/header-background-image-small.png';
import headerBackgroundImage from '../public/header-background-image.png';

const useStyles = createStyles(() => ({
  headerBackgroundImage: {
    visibility: 'hidden',
  },
}));

export default function HeaderBackgroundImage() {
  const { classes } = useStyles();
  const commonProps: Partial<ImageProps> = {
    layout: 'fill',
    objectFit: 'cover',
    objectPosition: 'center',
    quality: 100,
  };

  return (
    <>
      <MediaQuery largerThan="sm" styles={{ visibility: 'visible' }}>
        <Image
          className={classes.headerBackgroundImage}
          src={headerBackgroundImage}
          alt="Header background image"
          {...commonProps}
        ></Image>
      </MediaQuery>
      <MediaQuery largerThan="xs" smallerThan="sm" styles={{ visibility: 'visible' }}>
        <Image
          className={classes.headerBackgroundImage}
          src={headerBackgroundImageSmall}
          alt="Header background image small"
          {...commonProps}
        ></Image>
      </MediaQuery>
    </>
  );
}
