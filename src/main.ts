import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Aqui no main é configurado os server.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
