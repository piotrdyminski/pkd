import { Button, createStyles } from '@mantine/core';
import Link from 'next/link';
import { ArticleModel } from '../models/article';
import ArticleBase from './article-base';

type ArticlePreviewProps = {
  article: ArticleModel;
  categoryPath: string;
};

const useStyles = createStyles(() => ({
  readMoreButton: {
    alignSelf: 'flex-end',
  },
}));

export default function ArticlePreview({ article, categoryPath }: ArticlePreviewProps) {
  const { classes } = useStyles();
  const { slug, content, images } = article;
  const hasAdditionalContent = content || images?.data?.length;
  return (
    <ArticleBase article={article} categoryPath={categoryPath} preview={true}>
      {hasAdditionalContent && (
        <Link href={`${categoryPath}/${slug}`} passHref>
          <Button className={classes.readMoreButton} component="a" variant="outline" size="xl">
            Czytaj wiecej...
          </Button>
        </Link>
      )}
    </ArticleBase>
  );
}
