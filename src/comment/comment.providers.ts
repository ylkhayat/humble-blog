import { COMMENT_REPOSITORY } from '../constants';
import { Connection } from 'typeorm';
import { Comment } from './comment.entity';

export const commentProviders = [
  {
    provide: COMMENT_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Comment),
    inject: ['DATABASE_CONNECTION'],
  },
];
