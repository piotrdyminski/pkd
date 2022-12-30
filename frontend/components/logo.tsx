import Image from 'next/image';
import headerIcon from '../public/header-icon.png';

type LogoProps = {
  size: number;
};

export default function Logo({ size }: LogoProps) {
  return <Image width={size} height={size} src={headerIcon} alt="Ikona Matki Bożej" />;
}
