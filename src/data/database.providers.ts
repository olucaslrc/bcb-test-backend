import { Sequelize } from 'sequelize-typescript';
import Customer from 'src/entities/customer.entity';
import SMS from 'src/entities/sms.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD.toString(),
        database: process.env.DATABASE_NAME,
        dialectOptions: {
          decimalNumbers: true,
        },
      });
      sequelize.addModels([Customer]);
      sequelize.addModels([SMS]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
