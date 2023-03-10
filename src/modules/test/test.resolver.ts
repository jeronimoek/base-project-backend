import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Test } from '@modules/test/test.model';
import { TestService } from '@modules/test/test.service';

@Resolver()
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Query(() => Test)
  async test(@Args('id', { type: () => Int }) id: number): Promise<Test> {
    try {
      return await this.testService.get(id);
    } catch (error) {
      throw error;
    }
  }
}
