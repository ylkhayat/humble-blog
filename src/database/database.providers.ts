import { Article } from '../article/article.entity';
import { Author } from '../author/author.entity';
import { Comment } from '../comment/comment.entity';
import { createConnection } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires

export const connectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number.parseInt(process.env.MYSQL_PORT, 10) || 0,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Author, Article, Comment],
  synchronize: true,
};
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(connectionOptions as any),
  },
];
