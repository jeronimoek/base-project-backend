import { Injectable } from '@nestjs/common/decorators';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {}

  get(id: number) {
    return this.prisma.test.findFirstOrThrow({
      where: { id },
    });
  }
}
