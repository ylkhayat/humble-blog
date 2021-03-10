import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './articles/articles.controller';
import { AuthorsController } from './authors/authors.controller';
import { CommentsController } from './comments/comments.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ArticlesController,
    AuthorsController,
    CommentsController,
  ],
  providers: [AppService],
})
export class AppModule {}
