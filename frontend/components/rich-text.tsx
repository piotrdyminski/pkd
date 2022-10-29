import { getStrapiURL } from '../lib/api';

export type RichTextProps = {
  html: string;
};

export default function RichText({ html }: RichTextProps) {
  const sanitizeStrapiUploadPaths = (html: string) => html.replaceAll('/uploads', getStrapiURL('/uploads'));

  return <div dangerouslySetInnerHTML={{ __html: sanitizeStrapiUploadPaths(html) }} />;
}
