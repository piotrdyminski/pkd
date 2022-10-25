import { Box } from '@mantine/core';
import Image from 'next/image';
import headerIcon from '../public/header-icon.png';

export default function Logo() {
  return (
    <Box sx={{ height: 38, width: 38 }}>
      <Image src={headerIcon} alt="Ikona Matki Bożej"></Image>
    </Box>
  );
}
