import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { ArticlesModule } from './article/article.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthorModule,
    // ArticlesModule,
    // CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
