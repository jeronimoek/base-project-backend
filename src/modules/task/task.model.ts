import { Base } from '@modules/base/base.model';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Task extends Base {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => Number, { nullable: true })
  estimated_time?: number | null;

  @Field(() => Number, { nullable: true })
  parent_task_id?: number | null;

  @Field(() => Task, { nullable: true })
  parent_task?: Task | null;

  @Field(() => Boolean)
  completed: boolean;
}

@InputType()
export class CreateTaskInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Number, { nullable: true })
  estimated_time?: number;

  @Field(() => Number, { nullable: true })
  parent_task_id?: number;

  @Field(() => Boolean, { nullable: true })
  completed?: boolean;
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

  @Field(() => Boolean, { nullable: true })
  completed?: boolean;
}
