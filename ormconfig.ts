const typeOrmConfig = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number.parseInt(process.env.MYSQL_PORT, 10) || '',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['dist/**/*.entity.{.ts,.js}'],
  synchronize: true,
};

module.exports = typeOrmConfig;
