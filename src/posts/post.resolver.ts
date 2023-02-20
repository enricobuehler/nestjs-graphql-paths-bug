import { Query, Resolver } from '@nestjs/graphql';
import { PostEntity } from './post.entity';

@Resolver()
export class PostResolver {
  @Query(() => PostEntity)
  post() {
    console.log('called');
  }
}
