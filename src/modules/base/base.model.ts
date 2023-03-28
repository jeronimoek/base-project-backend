import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Base {
  @Field()
  its: Date;

  @Field(() => Date, { nullable: true })
  uts?: Date | null;
}
