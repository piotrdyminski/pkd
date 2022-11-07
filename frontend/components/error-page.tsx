import { Button, Container, createStyles, Group, Text, Title } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    textAlign: 'center',
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

type ErrorPageProps = {
  errorCode: string;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
};

export default function ErrorPage({ errorCode, title, description, href, buttonLabel }: ErrorPageProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{errorCode}</div>
      <Title className={classes.title}>{title}</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        {description}
      </Text>
      <Group position="center">
        <Link href={href} passHref>
          <Button variant="subtle" size="md">
            {buttonLabel}
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
