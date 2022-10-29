import { Anchor, createStyles, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { getResponsiveImageUrl, getStrapiMedia } from '../lib/media';
import { ArticleModel } from '../models/article';
import { StrapiApiImage } from '../models/strapi';
import ArticleTitle from './article-title';

type ArticleBaseProps = {
  article: ArticleModel;
  categoryPath: string;
  preview: boolean;
};

const useStyles = createStyles(() => ({
  article: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    align: 'flex-start',
    justify: 'flex-start',
    gap: '16px',
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
  const imageObject = image.data?.attributes;
  const { alternativeText, width, height } = imageObject ?? {};

  const getArticleImage = (image: StrapiApiImage) => (
    <Image
      src={getStrapiMedia(getResponsiveImageUrl(image, ['large']))}
      alt={alternativeText || ''}
      width={width}
      height={height}
      quality={100}
    />
  );

  return (
    <article className={classes.article}>
      <ArticleTitle article={article} categoryPath={categoryPath} preview={preview} />
      {imageObject &&
        (preview ? (
          <Link href={`${categoryPath}/${slug}`} passHref>
            <Anchor component="a">{getArticleImage(imageObject)}</Anchor>
          </Link>
        ) : (
          getArticleImage(imageObject)
        ))}
      <Text>{description}</Text>
      {children}
    </article>
  );
}
