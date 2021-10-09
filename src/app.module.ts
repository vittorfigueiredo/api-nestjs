import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/users.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {}
