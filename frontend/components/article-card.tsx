import { Anchor, Button, Card, createStyles, Group, Text, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { getResponsiveImageUrl, getStrapiMedia } from '../lib/media';
import { ArticleModel } from '../models/article';

type ArticleCardProps = {
  article: ArticleModel;
};

const useStyles = createStyles(() => ({
  card: {
    flexBasis: '400px',
  },
  image: {
    position: 'relative',
    height: '225px',
  },
}));

export function ArticleCard({ article }: ArticleCardProps) {
  const { classes } = useStyles();
  const { slug, title, description, image } = article;
  const href = `/z-zycia-parafii/${slug}`;
  const imageObject = image.data?.attributes;

  return (
    <Card className={classes.card} shadow="sm" p="lg" radius="md" withBorder>
      {imageObject && (
        <Card.Section className={classes.image} mb="md">
          <Link href={href} passHref>
            <Anchor component="a">
              <Image
                src={getStrapiMedia(getResponsiveImageUrl(imageObject, ['small', 'thumbnail']))}
                alt={imageObject.alternativeText || ''}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </Anchor>
          </Link>
        </Card.Section>
      )}
      <Group mb="xs">
        <Title order={3}>{title}</Title>
      </Group>
      <Text size="md" color="dimmed" lineClamp={4}>
        {description}
      </Text>
      <Link href={href} passHref>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" size="md">
          Czytaj więcej
        </Button>
      </Link>
    </Card>
  );
}
