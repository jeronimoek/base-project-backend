import { TestService } from '@modules/test/test.service';
import { Module } from '@nestjs/common';
import { TestResolver } from '@modules/test/test.resolver';

@Module({
  imports: [],
  providers: [TestResolver, TestService],
  exports: [TestService],
})
export class TestModule {}
