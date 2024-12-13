import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Torna o PrismaModule global para toda a aplicação
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta o PrismaService para outros módulos
})
export class PrismaModule {}
