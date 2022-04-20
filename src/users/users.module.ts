import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
