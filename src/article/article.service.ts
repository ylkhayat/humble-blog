import { ARTICLES_REPOSITORY } from 'src/constants';
import { Inject, Injectable } from '@nestjs/common';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject(ARTICLES_REPOSITORY) private articlesRepository: typeof Article,
  ) {}

  findAll(): Promise<Article[]> {
    return this.articlesRepository.findAll<Article>();
  }
}
