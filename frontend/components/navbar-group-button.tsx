import { Anchor, Collapse, createStyles } from '@mantine/core';
import { IconChevronRight, TablerIcon } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NavbarButton } from './navbar-button';

const useStyles = createStyles((theme) => ({
  link: {
    fontFamily: 'Cinzel, serif',
    fontWeight: 700,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px`,
    paddingLeft: 35,
    marginLeft: 25,
    color: theme.colors.gray[7],
    borderLeft: `1px solid ${theme.colors.gray[3]}`,

    '&:hover, &.active': {
      backgroundColor: theme.colors.blue[1],
      color: 'initial',
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

export type NavbarGroupButtonProps = {
  icon: TablerIcon;
  label: string;
  links: { label: string; link: string }[];
};

export function NavbarGroupButton({ icon, label, links }: NavbarGroupButtonProps) {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const items = links.map((link, index) => (
    <Link href={link.link} key={index} passHref>
      <Anchor className={`${classes.link} ${router.pathname.startsWith(link.link) ? 'active' : ''}`}>
        {link.label}
      </Anchor>
    </Link>
  ));
  return (
    <>
      <NavbarButton icon={icon} label={label} onClick={() => setOpened((o) => !o)} active={false}>
        <IconChevronRight
          className={classes.chevron}
          size={14}
          stroke={1.5}
          style={{
            transform: opened ? `rotate(90deg)` : 'none',
          }}
        />
      </NavbarButton>
      <Collapse in={opened}>{items}</Collapse>
    </>
  );
}
