import Head from 'next/head';

const DEFAULT_META_TITLE = 'Parafia Rzymskokatolicka pw. Matki Bożej Fatmiskiej w Kielcach-Dyminach';

type SeoProps = {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: string;
  article?: boolean;
};

export default function Seo({ metaTitle, metaDescription, shareImage, article }: SeoProps) {
  const metaTitleWithSuffix = metaTitle ? `${metaTitle} - ${DEFAULT_META_TITLE}` : DEFAULT_META_TITLE;
  return (
    <Head>
      <>
        <title>{metaTitleWithSuffix}</title>
        <meta property="og:title" content={metaTitleWithSuffix} />
        <meta name="twitter:title" content={metaTitleWithSuffix} />
      </>
      {metaDescription && (
        <>
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta name="twitter:description" content={metaDescription} />
        </>
      )}
      {shareImage && (
        <>
          <meta property="og:image" content={shareImage} />
          <meta name="twitter:image" content={shareImage} />
          <meta name="image" content={shareImage} />
        </>
      )}
      {article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
