import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
