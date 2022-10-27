import { Anchor } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export type RecommendedLinkImageProps = {
  href: string;
  src: StaticImageData;
  alt: string;
};

export default function RecommendedLinkImage({ href, src, alt }: RecommendedLinkImageProps) {
  return (
    <Link href={href} passHref>
      <Anchor component="a" target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} quality={100} />
      </Anchor>
    </Link>
  );
}
