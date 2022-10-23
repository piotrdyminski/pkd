import { Anchor, Breadcrumbs, createStyles, Divider, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

type PageProps = {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

const useStyles = createStyles((theme) => ({
  breadcrumbs: {
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    fontSize: theme.fontSizes.sm,
  },
  mainDivider: {
    width: '50%',
  },
}));

export default function Page({ title, breadcrumbs, children }: React.PropsWithChildren<PageProps>) {
  const { classes } = useStyles();

  const breadcrumbItems =
    breadcrumbs?.map(({ label, href }, index) =>
      href ? (
        <Link key={index} href={href} passHref>
          <Anchor component="a" underline={false}>
            {label}
          </Anchor>
        </Link>
      ) : (
        <Text key={index}>{label}</Text>
      )
    ) ?? [];

  return (
    <Stack align="center" justify="flex-start" spacing="xl">
      {breadcrumbItems.length > 0 && <Breadcrumbs className={classes.breadcrumbs}>{breadcrumbItems}</Breadcrumbs>}
      {title && (
        <>
          <Title order={1} align="center">
            {title}
          </Title>
          <Divider className={classes.mainDivider} my="xs" size="sm" />
        </>
      )}
      {children}
    </Stack>
  );
}
