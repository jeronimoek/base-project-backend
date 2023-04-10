import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTaskInput } from '@modules/task/task.model';
import { Task, UpdateTaskInput } from '@modules/task/task.model';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  get(id: number) {
    return this.prisma.task.findFirstOrThrow({
      where: { id },
    });
  }

  getList() {
    return this.prisma.task.findMany({ orderBy: { its: 'desc' } });
  }

  create(input: CreateTaskInput) {
    return this.prisma.task.create({ data: input });
  }

  async update(id: number, input: UpdateTaskInput) {
    if (input.parent_task_id) {
      const parents: Pick<Task, 'id' | 'parent_task_id'>[] = await this.prisma
        .$queryRaw`
          WITH RECURSIVE Generation(id) AS
          (
          -- First anchor member returns parent task's parent.
            SELECT parent_task_id
            FROM task
            WHERE id = ${input.parent_task_id}

            UNION ALL
            -- First recursive member returns parents of the previous generation.
            
            SELECT parent_task_id
            FROM Generation, task
            WHERE Generation.id = task.id
          )

          SELECT task.id
          FROM Generation, task
          WHERE Generation.id = task.id;
        `;

      if (parents.some((parent) => parent.id === id)) {
        throw new Error("Can't assign a task as a child of it's children");
      }
    }

    return this.prisma.task.update({
      where: {
        id,
      },
      data: { ...input, uts: new Date() },
    });
  }

  delete(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
