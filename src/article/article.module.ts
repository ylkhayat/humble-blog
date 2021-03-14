import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { DatabaseModule } from '../database/database.module';
import { articleProviders } from './article.providers';
import { authorProviders } from '../author/author.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticleService, ...articleProviders, ...authorProviders],
})
export class ArticleModule {}
