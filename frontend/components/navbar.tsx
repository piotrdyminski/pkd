import { Anchor, Navbar, Stack, Title } from '@mantine/core';
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
  TablerIcon,
} from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import diecezjaKielecka from '../public/diecezja-kielecka.png';
import sanktuariumFatimskie from '../public/sanktuarium-fatimskie.png';
import wiaraPL from '../public/wiara-pl.png';
import { NavbarLinkButton } from './nabvar-link-button';
import { NavbarGroupButton } from './navbar-group-button';

type AppNavbarProps = {
  opened: boolean;
};

type NavbarLink = {
  label: string;
  icon: TablerIcon;
  link: string;
};

type NavbarGroup = {
  label: string;
  icon: TablerIcon;
  links: { label: string; link: string }[];
};

type NavbarItem = NavbarLink | NavbarGroup;

const linkData: NavbarItem[] = [
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
    label: 'Dokumenty do Sakramentów',
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
  const isNavbarGroup = (menuItem: NavbarItem): menuItem is NavbarGroup => {
    return Array.isArray((menuItem as NavbarGroup).links);
  };

  const links = linkData.map((menuItem, index) => {
    return isNavbarGroup(menuItem) ? (
      <NavbarGroupButton key={index} {...menuItem} />
    ) : (
      <NavbarLinkButton key={index} {...menuItem} />
    );
  });

  return (
    <Navbar width={{ sm: 200, lg: 300 }} height="auto" p="lg" hiddenBreakpoint="sm" hidden={!opened}>
      {links}
      <Stack align="center" mt="50px">
        <Title order={3}>Polecamy</Title>
        <Stack spacing={0}>
          <Link href="https://wiara.pl" passHref>
            <Anchor component="a" target="_blank" rel="noopener noreferrer">
              <Image src={wiaraPL} alt="Wiara.pl" width={558} height={200} quality={100}></Image>
            </Anchor>
          </Link>
          <Link href="https://fatima.pt/pl/pages/transmisja-online" passHref>
            <Anchor component="a" target="_blank" rel="noopener noreferrer">
              <Image
                src={sanktuariumFatimskie}
                alt="Sanktuarium Fatimskie - Transmisja online"
                width={558}
                height={200}
                quality={100}
              ></Image>
            </Anchor>
          </Link>
          <Link href="https://diecezja.kielce.pl" passHref>
            <Anchor component="a" target="_blank" rel="noopener noreferrer">
              <Image src={diecezjaKielecka} alt="Diecezja kielecka" width={558} height={200} quality={100}></Image>
            </Anchor>
          </Link>
          <Anchor
            className="twitter-timeline"
            data-lang="pl"
            data-width="259"
            data-height="350"
            href="https://twitter.com/Pontifex_pl?ref_src=twsrc%5Etfw"
          >
            Tweety użytkownika Pontifex_pl
          </Anchor>{' '}
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </Stack>
      </Stack>
    </Navbar>
  );
}
