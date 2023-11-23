import { NestFactory } from '@nestjs/core';
import * as process from "process";
import {AppModule} from "./app.module";
import '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Production-project')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => {
    console.log(`Server started on port: `, PORT);
  });
}
bootstrap();
