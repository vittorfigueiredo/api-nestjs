import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user-dto';

/**
 * O controller recebe as requisições e envia os dados
 * através do DTO para o service processar as regras de negócio
 * e retorna a resposta.
 */
@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, //Generic
  ) {}

  @Get()
  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  @Get(':id')
  show(@Param('id') id: string): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  @Post()
  /**
   * Aqui no body é passado o dto CreateUserDto,
   * que contém somente os dados que queremos para
   * realizar o post.
   */
  async store(@Body() body: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(body);
    return this.userRepository.save(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: User): Promise<User> {
    await this.userRepository.findOneOrFail(+id);
    this.userRepository.update({ id: +id }, body);
    return this.userRepository.findOneOrFail(+id);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    await this.userRepository.findOneOrFail(+id);
    this.userRepository.delete(id);
  }
}
