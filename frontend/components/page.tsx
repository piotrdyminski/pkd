import { Anchor, Breadcrumbs, createStyles, Divider, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

type PageProps = {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  align?: string;
};

const useStyles = createStyles((theme) => ({
  page: {
    padding: '40px',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      padding: '30px',
    },
    width: '100%',
  },
  pageTitle: {
    width: '100%',
  },
  breadcrumbs: {
    width: '100%',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },
  breadcrumb: {
    whiteSpace: 'initial',
    overflowWrap: 'break-word',
    maxWidth: '100%',
  },
  mainDivider: {
    width: '50%',
  },
}));

export default function Page({ title, breadcrumbs, align, children }: React.PropsWithChildren<PageProps>) {
  const { classes } = useStyles();

  const breadcrumbItems =
    breadcrumbs?.map(({ label, href }, index) =>
      href ? (
        <Link key={index} href={href} passHref>
          <Anchor component="a" underline={false} className={classes.breadcrumb}>
            {label}
          </Anchor>
        </Link>
      ) : (
        <Text key={index} className={classes.breadcrumb}>
          {label}
        </Text>
      )
    ) ?? [];

  return (
    <Stack className={classes.page} align={align ?? 'initial'} justify="flex-start" spacing="xl">
      {breadcrumbItems.length > 0 && <Breadcrumbs className={classes.breadcrumbs}>{breadcrumbItems}</Breadcrumbs>}
      {title && (
        <Stack className={classes.pageTitle} align="center">
          <Title order={1} align="center">
            {title}
          </Title>
          <Divider className={classes.mainDivider} my="xs" size="sm" />
        </Stack>
      )}
      {children}
    </Stack>
  );
}
