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

//API REST - POST users
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
    // 204 - No content
    await this.userRepository.findOneOrFail(+id);
    this.userRepository.delete(id);
  }
}
