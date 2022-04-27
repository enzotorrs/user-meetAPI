import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meet } from './meet.entity';
import { MeetsController } from './meets.controller';
import { MeetsService } from './meets.service';

@Module({
  controllers: [MeetsController],
  providers: [MeetsService],
  imports: [TypeOrmModule.forFeature([Meet])]
})
export class MeetsModule {}
