import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClient } from '@prisma/client';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração de CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://dev-connected.vercel.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  // Aplicar migrações do Prisma automaticamente
  try {
    console.log('Aplicando migrações...');
    await execAsync('npx prisma migrate deploy');
    console.log('Migrações aplicadas com sucesso!');
  } catch (error) {
    console.error('Erro ao aplicar migrações:', error);
  }

  // Iniciar o servidor
  await app.listen(process.env.PORT || 5000);
}

bootstrap();
