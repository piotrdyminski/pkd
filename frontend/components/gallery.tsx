import { Carousel } from '@mantine/carousel';
import { AspectRatio, createStyles, Grid, Modal } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';
import { getResponsiveImageUrl, getStrapiMedia } from '../lib/media';
import { StrapiApiImage } from '../models/strapi';

const useStyles = createStyles(() => ({
  grid: {
    width: 'inherit',
    margin: 0,
  },
  imageWrapper: {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
  },
  modal: {
    background: 'rgba(0, 0, 0, 0.8)',
  },
  modalHeader: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    zIndex: 1,
    margin: 0,
  },
  height100: {
    height: '100%',
  },
}));

type GalleryProps = {
  images: StrapiApiImage[];
};

export default function Gallery({ images }: GalleryProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const [carouselInitialSlide, setCarouselInitialSlide] = useState(1);

  const imageClicked = (imageIndex: number) => {
    setCarouselInitialSlide(imageIndex);
    setOpened(true);
  };

  const gridImages = images.map((image, index) => (
    <Grid.Col key={index} span={3}>
      <AspectRatio ratio={1 / 1} className={classes.imageWrapper} onClick={() => imageClicked(index)}>
        <Image
          src={getStrapiMedia(getResponsiveImageUrl(image, ['small', 'thumbnail']))}
          alt={image.alternativeText || ''}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </AspectRatio>
    </Grid.Col>
  ));

  const carouselImages = images.map(({ url, alternativeText }, index) => (
    <Carousel.Slide key={index}>
      <Image src={getStrapiMedia(url)} alt={alternativeText || ''} layout="fill" objectFit="scale-down" quality={100} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Grid className={classes.grid} gutter={5}>
        {gridImages}
      </Grid>
      <Modal
        classNames={{ modal: classes.modal, header: classes.modalHeader, body: classes.height100 }}
        fullScreen
        padding={0}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Carousel
          classNames={{
            root: classes.height100,
            viewport: classes.height100,
            container: classes.height100,
          }}
          initialSlide={carouselInitialSlide}
          withIndicators
          loop
        >
          {carouselImages}
        </Carousel>
      </Modal>
    </>
  );
}
