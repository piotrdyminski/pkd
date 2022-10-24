import { Navbar } from '@mantine/core';
import {
  IconAddressBook,
  IconAlbum,
  IconBuildingChurch,
  IconBuildingMonument,
  IconCalendarEvent,
  IconFiles,
  IconFriends,
  IconHome,
  IconNews,
  IconPray,
} from '@tabler/icons';

import { NavbarLinkButton, NavbarLinkButtonProps } from './nabvar-link-button';
import { NavbarGroupButton, NavbarGroupButtonProps } from './navbar-group-button';
import RecommendedLinks from './recommended-links';
import ViewCounter from './view-counter';

type NavbarItem = NavbarLinkButtonProps | NavbarGroupButtonProps;

type AppNavbarProps = {
  opened: boolean;
};

const navbarItemList: NavbarItem[] = [
  { label: 'Strona główna', icon: IconHome, link: '/' },
  { label: 'Historia', icon: IconBuildingChurch, link: '/historia' },
  { label: 'Ogłoszenia', icon: IconNews, link: '/ogloszenia' },
  { label: 'Intencje mszalne', icon: IconPray, link: '/intencje-mszalne' },
  { label: 'Z życia parafii', icon: IconCalendarEvent, link: '/z-zycia-parafii' },
  { label: 'Galeria', icon: IconAlbum, link: '/galeria' },
  { label: 'Dane parafii', icon: IconAddressBook, link: '/dane-parafii' },
  {
    label: 'Grupy parafialne',
    icon: IconFriends,
    links: [
      { label: 'Kółko różańcowe', link: '/grupy-parafialne/kolko-rozancowe' },
      { label: 'Chór', link: '/grupy-parafialne/chor' },
    ],
  },
  {
    label: 'Dok. do Sakramentów',
    icon: IconFiles,
    links: [
      { label: 'Sakrament Chrztu', link: '/dokumenty-do-sakramentow/sakrament-chrztu' },
      { label: 'Sakrament Bierzmowania', link: '/dokumenty-do-sakramentow/sakrament-bierzmowania' },
      { label: 'Sakrament Małżeństwa', link: '/dokumenty-do-sakramentow/sakrament-malzenstwa' },
    ],
  },
  { label: 'Cmentarz', icon: IconBuildingMonument, link: '/cmentarz' },
];

export default function AppNavbar({ opened }: AppNavbarProps) {
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
    <Navbar width={{ sm: 200, lg: 300 }} height="auto" p="lg" hiddenBreakpoint="sm" hidden={!opened}>
      {navbarLinks}
      <RecommendedLinks />
      <ViewCounter />
    </Navbar>
  );
}
