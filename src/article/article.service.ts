import { Author } from './../author/author.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>,
  ) {}

  async create(articleData: CreateArticleDto): Promise<Article> {
    const article = new Article();
    const author = await getRepository(Author).findOne(articleData.author);
    if (!author)
      throw new HttpException("Couldn't find the author", HttpStatus.NOT_FOUND);
    article.body = articleData.body;
    article.title = articleData.title;
    article.author = author;

    const newArticle = await this.articlesRepository.save(article);
    return newArticle;
  }

  findAll(query: string, byThumbsUp: boolean): Promise<Article[]> {
    const qb = getRepository(Article).createQueryBuilder('article');
    if (query)
      qb.where('article.body like :query OR article.title like :query', {
        query: `%${query}%`,
      });
    if (byThumbsUp) qb.orderBy('article.thumbsUp', 'DESC');
    return qb.getMany();
  }

  async findById(articleId: number): Promise<Article> {
    const article = await this.articlesRepository.findOne(articleId, {
      relations: ['comments', 'author'],
    });
    if (!article)
      throw new HttpException(
        "Couldn't find the article",
        HttpStatus.NOT_FOUND,
      );
    return article;
  }

  async update(articleId: number, thumbsUp: boolean): Promise<Article> {
    const article = await this.articlesRepository.findOne(articleId, {
      relations: ['comments', 'author'],
    });
    if (!article)
      throw new HttpException(
        "Couldn't find the article",
        HttpStatus.NOT_FOUND,
      );
    article.thumbsUp += thumbsUp ? 1 : 0;
    const updateArticle = await this.articlesRepository.save(article);
    return updateArticle;
  }
}
