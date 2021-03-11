import { Entity, PrimaryGeneratedColumn, Column, BeforeUpdate } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';

@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }
}
