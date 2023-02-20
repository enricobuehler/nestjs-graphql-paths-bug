import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthorEntity {
  name: string;
}
