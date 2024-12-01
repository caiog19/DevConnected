import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: [
      'http://localhost:3000',  
      'https://dev-connected.vercel.app',  
      'https://devconnected.onrender.com', 
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  await app.listen(5000);  
}

bootstrap();
