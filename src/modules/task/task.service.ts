import { UpdateTaskInput } from './task.model';
import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTaskInput } from '@modules/task/task.model';

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

  update(id: number, input: UpdateTaskInput) {
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
