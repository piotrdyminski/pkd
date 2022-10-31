import { Global } from '@mantine/core';

export function GlobalStyles() {
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
        {
          'h1, h2, h3, h4, h5, h6': {
            fontFamily: 'Cinzel',
          },
          '.rich-text': {
            lineHeight: 1.7,
          },
        },
      ]}
    />
  );
}
