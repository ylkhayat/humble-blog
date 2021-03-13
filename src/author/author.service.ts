import { CreateAuthorDto } from './dto/create-author.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorsRepository: Repository<Author>,
  ) {}

  async create(authorData: CreateAuthorDto): Promise<Author> {
    const author = new Author();
    author.name = authorData.name;
    author.jobTitle = authorData.jobTitle;

    const newAuthor = await this.authorsRepository.save(author);
    return newAuthor;
  }

  async findAll(): Promise<Author[]> {
    return await this.authorsRepository.find();
  }

  async findById(authorId: number): Promise<Author> {
    const author = await this.authorsRepository.findOne(authorId, {
      relations: ['articles'],
    });
    if (!author)
      throw new HttpException("Couldn't find the author", HttpStatus.NOT_FOUND);
    return author;
  }
}
