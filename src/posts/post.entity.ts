import { AuthorEntity } from '@/author/author.entity';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostEntity {
  title: string;
  content: string;
  author: AuthorEntity;
}
