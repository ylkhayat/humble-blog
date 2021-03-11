import { Module } from '@nestjs/common';
import { ArticlesController } from './article.controller';
import { ArticlesService } from './article.service';
import { articlesProviders } from './article.providers';

@Module({
  imports: [],
  controllers: [ArticlesController],
  providers: [ArticlesService, ...articlesProviders],
})
export class ArticlesModule {}
