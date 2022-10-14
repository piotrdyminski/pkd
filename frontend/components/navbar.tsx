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
} from '@tabler/icons';
import { NavbarLinksGroup } from './navbar-links-group';

type AppNavbarProps = {
  opened: boolean;
};

const linkData = [
  { label: 'Strona główna', icon: IconHome },
  { label: 'Historia', icon: IconBuildingChurch },
  { label: 'Ogłoszenia', icon: IconNews },
  { label: 'Z życia parafii', icon: IconCalendarEvent },
  { label: 'Galeria', icon: IconAlbum },
  { label: 'Dane parafii', icon: IconAddressBook },
  {
    label: 'Grupy parafialne',
    icon: IconFriends,
    links: [
      { label: 'Kółko różańcowe', link: '/' },
      { label: 'Chór', link: '/' },
    ],
  },
  {
    label: 'Dokumenty do Sakramentów',
    icon: IconFiles,
    links: [
      { label: 'Sakrament Chrztu', link: '/' },
      { label: 'Sakrament Bierzmowania', link: '/' },
      { label: 'Sakrament Małżeństwa', link: '/' },
    ],
  },
  { label: 'Cmentarz', icon: IconBuildingMonument },
];

export default function AppNavbar({ opened }: AppNavbarProps) {
  const links = linkData.map((item) => <NavbarLinksGroup {...item} key={item.label} />);

  return (
    <Navbar width={{ sm: 200, lg: 300 }} height="auto" p="xs" hiddenBreakpoint="sm" hidden={!opened}>
      {links}
    </Navbar>
  );
}
