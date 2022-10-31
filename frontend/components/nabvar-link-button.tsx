import Link from 'next/link';
import { useRouter } from 'next/router';
import { isRouteActive } from '../lib/utils';
import { NavbarLink } from './navbar';
import { NavbarButton } from './navbar-button';

export type NavbarLinkButtonProps = {
  navbarLink: NavbarLink;
  onClick: () => void;
};

export function NavbarLinkButton({ navbarLink, onClick }: NavbarLinkButtonProps) {
  const router = useRouter();
  const { icon, label, link } = navbarLink;
  return (
    <Link href={link} passHref>
      <NavbarButton
        icon={icon}
        label={label}
        active={link === '/' ? router.pathname === link : isRouteActive(router, link)}
        onClick={onClick}
      />
    </Link>
  );
}
