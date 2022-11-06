import { Anchor, AspectRatio, createStyles, Text } from '@mantine/core';
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
    gap: '24px',
  },
  articleImageWrapper: {
    maxHeight: '600px',
    position: 'relative',
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
  const { alternativeText, width = 0, height = 0 } = imageObject ?? {};

  const getArticleImage = (image: StrapiApiImage) => (
    <AspectRatio ratio={width / height} className={classes.articleImageWrapper}>
      <Image
        src={getStrapiMedia(getResponsiveImageUrl(image, ['large']))}
        alt={alternativeText || ''}
        width={width}
        height={height}
        layout="fill"
        objectFit="contain"
        objectPosition="center"
        quality={100}
      />
    </AspectRatio>
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
