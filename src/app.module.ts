import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/users.module';

/**
 * forRoot indica que tal modulo é um modulo raíz.
 * Deve-se importar os outros modulos criados aqui nesse app.module.
 */
@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {}
