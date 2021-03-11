import { ARTICLES_REPOSITORY } from 'src/constants';
import { Article } from './article.entity';

export const articlesProviders = [
  {
    provide: ARTICLES_REPOSITORY,
    useValue: Article,
  },
];
