import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MeetsModule } from './meets/meets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    MeetsModule,
  ],
})
export class AppModule {}
