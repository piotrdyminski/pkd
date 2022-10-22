import { Navbar, Stack, Title } from '@mantine/core';
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
import diecezjaKielecka from '../public/diecezja-kielecka.png';
import papiezFranciszek from '../public/papiez-franciszek.png';
import sanktuariumFatimskie from '../public/sanktuarium-fatimskie.png';
import wiaraPL from '../public/wiara-pl.png';
import { NavbarLinkButton, NavbarLinkButtonProps } from './nabvar-link-button';
import { NavbarGroupButton, NavbarGroupButtonProps } from './navbar-group-button';
import RecommendedLinkImage, { RecommendedLinkImageProps } from './recommended-link-image';

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

const RecommendedLinkImageList: RecommendedLinkImageProps[] = [
  {
    href: 'https://wiara.pl',
    src: wiaraPL,
    alt: 'Wiara.pl',
  },
  {
    href: 'https://fatima.pt/pl/pages/transmisja-online',
    src: sanktuariumFatimskie,
    alt: 'Sanktuarium Fatimskie - Transmisja online',
  },
  {
    href: 'https://diecezja.kielce.pl',
    src: diecezjaKielecka,
    alt: 'Diecezja kielecka',
  },
  {
    href: 'https://twitter.com/Pontifex_pl',
    src: papiezFranciszek,
    alt: 'Tweety Papieża Franciszka',
  },
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

  const recommendedLinkImages = RecommendedLinkImageList.map((recommendedLinkImage, index) => (
    <RecommendedLinkImage key={index} {...recommendedLinkImage} />
  ));

  return (
    <Navbar width={{ sm: 200, lg: 300 }} height="auto" p="lg" hiddenBreakpoint="sm" hidden={!opened}>
      {navbarLinks}
      <Stack align="center" mt="50px">
        <Title order={3}>Polecamy</Title>
        <Stack spacing={0}>{recommendedLinkImages}</Stack>
      </Stack>
    </Navbar>
  );
}
