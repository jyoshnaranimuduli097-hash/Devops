import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted:true,
    transform : true
  }))
  const configService = app.get(ConfigService)
  const PORT = configService.get<number>('PORT') || 8000
  await app.listen(PORT,'0.0.0.0',()=>{
    console.log(`App running on port : ${PORT}`)
  });
}
await bootstrap();
