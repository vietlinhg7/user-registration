import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://venerable-seahorse-21ac66.netlify.app', // Set to your frontend’s deployed URL
    credentials: true,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
