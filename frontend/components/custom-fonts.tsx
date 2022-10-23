import { Global } from '@mantine/core';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Cinzel',
            src: `url('/fonts/Cinzel-latin.woff2') format('woff2')`,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Cinzel',
            src: `url('/fonts/Cinzel-latin-ext.woff2') format('woff2')`,
          },
        },
      ]}
    />
  );
}
