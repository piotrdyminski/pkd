import { TablerIcon } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavbarButton } from './navbar-button';

export type NavbarLinkButtonProps = {
  icon: TablerIcon;
  label: string;
  link: string;
};

export function NavbarLinkButton({ icon, label, link }: NavbarLinkButtonProps) {
  const router = useRouter();
  return (
    <Link href={link} passHref>
      <NavbarButton
        icon={icon}
        label={label}
        active={link === '/' ? router.pathname === link : router.pathname.startsWith(link)}
      />
    </Link>
  );
}
