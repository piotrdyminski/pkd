import { Anchor, createStyles, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { formatDateString } from '../lib/utils';
import { ArticleModel } from '../models/article';

type ArticleTitleProps = {
  article: ArticleModel;
  categoryPath: string;
  preview: boolean;
};

const useStyles = createStyles((theme) => ({
  title: {
    lineHeight: 1.7,
  },
  link: {
    fontFamily: 'inherit',
    color: 'inherit',
    '&:hover': {
      color: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
    },
  },
  subtitle: {
    fontWeight: 500,
    rowGap: 0,
  },
}));

export default function ArticleTitle({ article, categoryPath, preview }: ArticleTitleProps) {
  const { classes } = useStyles();
  const { title, slug, publishedAt } = article;
  const titleContent = preview ? (
    <Link href={`${categoryPath}/${slug}`} passHref>
      <Anchor component="a" className={classes.link} underline={false}>
        {title}
      </Anchor>
    </Link>
  ) : (
    title
  );
  return (
    <Stack align="flex-start" justify="flex-start" spacing={0}>
      <Title order={2} className={classes.title}>
        {titleContent}
      </Title>
      <Group className={classes.subtitle}>
        <Text>
          Kategoria:{' '}
          <Link href={categoryPath} passHref>
            <Anchor component="a" underline={false}>
              Z życia parafii
            </Anchor>
          </Link>
        </Text>
        <Text>Utworzono: {formatDateString(publishedAt)}</Text>
      </Group>
    </Stack>
  );
}
