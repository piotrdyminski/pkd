import { Stack, Title } from '@mantine/core';
import diecezjaKielecka from '../public/diecezja-kielecka.png';
import papiezFranciszek from '../public/papiez-franciszek.png';
import sanktuariumFatimskie from '../public/sanktuarium-fatimskie.png';
import wiaraPL from '../public/wiara-pl.png';
import RecommendedLinkImage, { RecommendedLinkImageProps } from './recommended-link-image';

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

export default function RecommendedLinks() {
  const recommendedLinkImages = RecommendedLinkImageList.map((recommendedLinkImage, index) => (
    <RecommendedLinkImage key={index} {...recommendedLinkImage} />
  ));

  return (
    <Stack align="center">
      <Title order={3} align="center">
        Polecamy
      </Title>
      <Stack spacing={0}>{recommendedLinkImages}</Stack>
    </Stack>
  );
}
