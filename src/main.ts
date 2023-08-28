import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerDocumentOptions } from './models/interfaces/swaggerDocumentOptions';
import { databaseProviders } from './data/database.providers';
import { Sequelize } from 'sequelize-typescript';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    
    const sequelizeProvider = databaseProviders.find(provider => provider.provide === 'SEQUELIZE');
    const sequelize: Sequelize = await sequelizeProvider.useFactory();

    await sequelize.sync();

    const config = new DocumentBuilder()
      .setTitle('BCB')
      .setDescription('The BCB API description')
      .setVersion('1.0')
      .addTag('bcb')
      .build();

      const options: SwaggerDocumentOptions =  {
        operationIdFactory: (
          controllerKey: string,
          methodKey: string
        ) => methodKey
      };

    const document = SwaggerModule.createDocument(app, config, options);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);

  } catch (error) {
    console.error(error);
  }
}
bootstrap();
