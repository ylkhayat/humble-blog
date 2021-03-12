import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { ArticlesModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthorModule,
    // ArticlesModule,
    // CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
