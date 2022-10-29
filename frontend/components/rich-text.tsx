import { getStrapiURL } from '../lib/api';

export type RichTextProps = {
  html: string;
};

export default function RichText({ html }: RichTextProps) {
  const uploadsRootPath = '/uploads';
  const sanitizeStrapiUploadPaths = (html: string) => html.replaceAll(uploadsRootPath, getStrapiURL(uploadsRootPath));

  return <div dangerouslySetInnerHTML={{ __html: sanitizeStrapiUploadPaths(html) }} />;
}
