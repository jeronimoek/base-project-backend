import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Task,
  CreateTaskInput,
  UpdateTaskInput,
} from '@modules/task/task.model';
import { TaskService } from '@modules/task/task.service';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => Task)
  task(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return this.taskService.get(id);
  }

  @Query(() => [Task])
  tasks(): Promise<Task[]> {
    return this.taskService.getList();
  }

  @Mutation(() => Task)
  createTask(@Args('input') input: CreateTaskInput): Promise<Task> {
    return this.taskService.create(input);
  }

  @Mutation(() => Task)
  updateTask(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateTaskInput,
  ): Promise<Task> {
    return this.taskService.update(id, input);
  }

  @Mutation(() => Task)
  deleteTask(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return this.taskService.delete(id);
  }
}
