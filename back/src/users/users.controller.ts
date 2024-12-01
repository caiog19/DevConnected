import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    return this.usersService.createUser(body);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.usersService.updateUser(Number(id), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(Number(id));
  }
}
