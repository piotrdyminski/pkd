import ReactMarkdown from 'react-markdown';
import { ArticleModel } from '../models/article';
import ArticleBase from './article-base';

type ArticleProps = {
  article: ArticleModel;
  categoryPath: string;
};

export default function Article({ article, categoryPath }: ArticleProps) {
  const { content } = article;
  return (
    <ArticleBase article={article} categoryPath={categoryPath} preview={false}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ArticleBase>
  );
}
