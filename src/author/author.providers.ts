import { AUTHOR_REPOSITORY } from './../constants';
import { Connection } from 'typeorm';
import { Author } from './author.entity';

export const authorProviders = [
  {
    provide: AUTHOR_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Author),
    inject: ['DATABASE_CONNECTION'],
  },
];
