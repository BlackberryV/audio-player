import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3001);
  } catch (e) {
    console.log(e);
  }
};

start();
