import { Base } from '@modules/base/base.model';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task extends Base {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Number, { nullable: true })
  estimated_time?: number | null;

  @Field(() => Number, { nullable: true })
  parent_task_id?: number | null;

  @Field(() => Task, { nullable: true })
  parent_task?: Task | null;
}

@InputType()
export class CreateTaskInput {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number, { nullable: true })
  estimated_time?: number;

  @Field(() => Number, { nullable: true })
  parent_task_id?: number;
}

@InputType()
export class UpdateTaskInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number, { nullable: true })
  estimated_time?: number;

  @Field(() => Number, { nullable: true })
  parent_task_id?: number;
}
