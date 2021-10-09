import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './user.entity';

/**
 * Tudo no nest é tratado como Module, um module contém
 * models ou entities, controllets e services.
 */
@Module({
  /**
   * for.feature indica que é uma funcionalidade.
   * Deve-se importar este arquivo lá no app.module.
   * Exportar os controllers e os services (provides).
   */
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
})
export class UsersModule {}
