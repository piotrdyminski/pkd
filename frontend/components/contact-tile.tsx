import { createStyles, Stack, Text, ThemeIcon } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';

type ContactTitleProps = {
  label: string;
  icon: TablerIcon;
};

const useStyles = createStyles((theme) => ({
  tile: {
    alignItems: 'center',
    color: theme.colors.gray[7],
  },
}));

export default function ContactTile({ label, icon: Icon }: ContactTitleProps) {
  const { classes } = useStyles();

  return (
    <Stack className={classes.tile}>
      <ThemeIcon variant="outline" radius="xl" size="xl">
        <Icon />
      </ThemeIcon>
      <Text size="md">{label}</Text>
    </Stack>
  );
}
