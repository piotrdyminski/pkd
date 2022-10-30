import { createStyles, Navbar, Stack } from '@mantine/core';
import {
  IconAlbum,
  IconBook,
  IconBuildingChurch,
  IconBuildingMonument,
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconFriends,
  IconHome,
  IconNews,
  IconPray,
  IconUsers,
} from '@tabler/icons';

import { NavbarLinkButton, NavbarLinkButtonProps } from './nabvar-link-button';
import { NavbarGroupButton, NavbarGroupButtonProps } from './navbar-group-button';
import NavbarHeader from './navbar-header';
import RecommendedLinks from './recommended-links';
import ViewCounter from './view-counter';

type NavbarItem = NavbarLinkButtonProps | NavbarGroupButtonProps;

type AppNavbarProps = {
  opened: boolean;
};

const navbarItemList: NavbarItem[] = [
  { label: 'Strona główna', icon: IconHome, link: '/' },
  { label: 'Historia', icon: IconBuildingChurch, link: '/historia' },
  { label: 'Ogłoszenia', icon: IconNews, link: '/ogloszenia-duszpasterskie' },
  { label: 'Intencje mszalne', icon: IconPray, link: '/intencje-mszalne' },
  { label: 'Liturgia', icon: IconBook, link: '/liturgia' },
  { label: 'Z życia parafii', icon: IconCalendarEvent, link: '/z-zycia-parafii' },
  { label: 'Duszpasterze', icon: IconUsers, link: '/duszpasterze' },
  { label: 'Galeria', icon: IconAlbum, link: '/galeria' },
  {
    label: 'Kancelaria',
    icon: IconBuildingSkyscraper,
    links: [
      { label: 'Dane parafii', link: '/kancelaria/dane-parafii' },
      { label: 'Sakrament Chrztu', link: '/kancelaria/sakrament-chrztu' },
      { label: 'Sakrament Euchahrystii', link: '/kancelaria/sakrament-euchahrystii' },
      { label: 'Sakrament Bierzmowania', link: '/kancelaria/sakrament-bierzmowania' },
      { label: 'Sakrament Małżeństwa', link: '/kancelaria/sakrament-malzenstwa' },
    ],
  },
  {
    label: 'Grupy parafialne',
    icon: IconFriends,
    links: [
      { label: 'Chór', link: '/grupy-parafialne/chor' },
      { label: 'Ministranci', link: '/grupy-parafialne/ministranci' },
      { label: 'Róże różańcowe', link: '/grupy-parafialne/roze-rozancowe' },
      { label: 'Schola młodzieżowa', link: '/grupy-parafialne/schola-mlodziezowa' },
      { label: 'Schola dziecięca', link: '/grupy-parafialne/schola-dziecieca' },
      { label: 'Strażacy', link: '/grupy-parafialne/strazacy' },
    ],
  },
  { label: 'Cmentarz', icon: IconBuildingMonument, link: '/cmentarz' },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    gap: '40px',
    boxShadow: '-5px 0px 15px 0px rgba(0, 0, 0, 0.1)',
    [`@media (max-width: ${theme.breakpoints.md - 1}px)`]: {
      position: 'fixed',
      width: '100%',
      overflow: 'auto',
    },
  },
}));

export default function AppNavbar({ opened }: AppNavbarProps) {
  const { classes } = useStyles();

  const isNavbarGroup = (navbarItem: NavbarItem): navbarItem is NavbarGroupButtonProps => {
    return Array.isArray((navbarItem as NavbarGroupButtonProps).links);
  };

  const navbarLinks = navbarItemList.map((menuItem, index) => {
    return isNavbarGroup(menuItem) ? (
      <NavbarGroupButton key={index} {...menuItem} />
    ) : (
      <NavbarLinkButton key={index} {...menuItem} />
    );
  });

  return (
    <Navbar
      className={classes.navbar}
      width={{ base: 300 }}
      height="auto"
      p="lg"
      hiddenBreakpoint="md"
      hidden={!opened}
    >
      <NavbarHeader />
      <Stack spacing={0}>{navbarLinks}</Stack>
      <Stack align="center" spacing="xl">
        <RecommendedLinks />
        <ViewCounter />
      </Stack>
    </Navbar>
  );
}
