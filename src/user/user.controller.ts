import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';

//API REST - POST users
@Controller('users')
export class UserController {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>, //Generic
  ) {}

  @Get()
  async index(): Promise<User[]> {
    return this.userRepo.find();
  }

  @Get(':id')
  show(@Param('id') id: string): Promise<User> {
    return this.userRepo.findOneOrFail(id);
  }

  @Post()
  async store(@Body() body: User): Promise<User> {
    const user = this.userRepo.create(body);
    return this.userRepo.save(user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: User): Promise<User> {
    await this.userRepo.findOneOrFail(+id);
    this.userRepo.update({ id: +id }, body);
    return this.userRepo.findOneOrFail(+id);
  }
}
