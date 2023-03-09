import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 실행하는 시작점
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
