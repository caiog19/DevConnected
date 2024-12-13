import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

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

  // Executar migrações antes de iniciar o servidor
  const prismaService = app.get(PrismaService);

  try {
    console.log('Aplicando migrações do Prisma...');
    const exec = require('child_process').execSync;
    exec('npx prisma migrate deploy', { stdio: 'inherit' });
    console.log('Migrações aplicadas com sucesso.');
  } catch (error) {
    console.error('Erro ao aplicar migrações:', error);
  }

  await app.listen(process.env.PORT || 5000);
}

bootstrap();
