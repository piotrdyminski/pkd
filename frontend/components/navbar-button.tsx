import { Box, createStyles, Group, ThemeIcon, UnstyledButton } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';
import { forwardRef } from 'react';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 700,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px`,

    '&:hover, &.active': {
      backgroundColor: theme.colors.blue[1],
    },
  },
}));

type NavbarButtonProps = {
  icon: TablerIcon;
  label: string;
  active: boolean;
  href?: string;
  onClick?: () => void;
};

export const NavbarButton = forwardRef<HTMLAnchorElement, React.PropsWithChildren<NavbarButtonProps>>(
  function NavbarButton({ icon: Icon, label, active, onClick, href, children }, ref) {
    const { classes } = useStyles();
    return (
      <UnstyledButton
        component="a"
        href={href}
        ref={ref}
        className={`${classes.control} ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        <Group spacing={10}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="sm">{label}</Box>
          </Box>
          {children}
        </Group>
      </UnstyledButton>
    );
  }
);
export default NavbarButton;
