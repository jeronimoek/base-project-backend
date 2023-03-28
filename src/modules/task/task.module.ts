import { TaskService } from '@modules/task/task.service';
import { Module } from '@nestjs/common';
import { TaskResolver } from '@modules/task/task.resolver';

@Module({
  imports: [],
  providers: [TaskResolver, TaskService],
  exports: [TaskService],
})
export class TaskModule {}
