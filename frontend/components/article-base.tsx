import { Anchor, createStyles, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMedia } from '../lib/media';
import { ArticleModel } from '../models/article';
import ArticleTitle from './article-title';

type ArticleBaseProps = {
  article: ArticleModel;
  categoryPath: string;
  preview: boolean;
};

const useStyles = createStyles(() => ({
  article: {
    width: '100%',
  },
}));

export default function ArticleBase({
  children,
  article,
  categoryPath,
  preview,
}: React.PropsWithChildren<ArticleBaseProps>) {
  const { classes } = useStyles();
  const { description, slug, image } = article;
  const { url, alternativeText, width, height } = image.data.attributes;
  return (
    <article>
      <Stack className={classes.article} align="flex-start" justify="flex-start">
        <ArticleTitle article={article} categoryPath={categoryPath} preview={preview} />
        <Link href={`${categoryPath}/${slug}`} passHref>
          <Anchor component="a">
            <Image
              src={getStrapiMedia(url)}
              alt={alternativeText || ''}
              width={width}
              height={height}
              quality={100}
            ></Image>
          </Anchor>
        </Link>
        <Text>{description}</Text>
        {children}
      </Stack>
    </article>
  );
}
