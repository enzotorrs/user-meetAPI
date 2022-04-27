import { Module } from '@nestjs/common';
import { MeetsController } from './meets.controller';
import { MeetsService } from './meets.service';

@Module({
  controllers: [MeetsController],
  providers: [MeetsService]
})
export class MeetsModule {}
