import ReactMarkdown from 'react-markdown';
import { ArticleModel } from '../models/article';
import ArticleBase from './article-base';
import Gallery from './gallery';

type ArticleProps = {
  article: ArticleModel;
  categoryPath: string;
};

export default function Article({ article, categoryPath }: ArticleProps) {
  const { content, images } = article;
  const imagesList = images.data.map(({ attributes }) => attributes);
  return (
    <ArticleBase article={article} categoryPath={categoryPath} preview={false}>
      <ReactMarkdown>{content}</ReactMarkdown>
      <Gallery images={imagesList}></Gallery>
    </ArticleBase>
  );
}
