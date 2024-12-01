import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';  
import { UsersController } from './users.controller';

@Module({
  imports: [],
  providers: [UsersService, PrismaService],  // Aqui você garante que UsersService seja um provider
  exports: [UsersService],  // Garanta que UsersService seja exportado para outros módulos
  controllers: [UsersController],
})
export class UsersModule {}
