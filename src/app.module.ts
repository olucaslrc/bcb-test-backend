import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { ConsutomersModule } from './modules/customers.module';
import { DatabaseModule } from './modules/database.module';
import { customersProdivers } from './providers/customers.providers';
import { CqrsModule } from '@nestjs/cqrs';
import { AddCustomerCommandHandler } from './commands/handlers/addCustomerCommandHandler';
import { AddCreditsCustomerCommandHandler } from './commands/handlers/addCreditsCustomerCommandHandler';
import { GetCustomersQueryHandler } from './queries/handlers/getCustomersQueryHandler';
import { ConfigModule } from '@nestjs/config';
import { GetCustomerBalanceQueryHandler } from './queries/handlers/getCustomerBalanceQueryHandler';
import { smsProdivers } from './providers/sms.provider';
import { SendSMSCommandHandler } from './commands/handlers/sendSMSCommandHandler';

@Module({
  imports: [
    DatabaseModule,
    ConsutomersModule,
    CqrsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, CustomersController],
  providers: [
    AppService,
    CustomersService,
    ...customersProdivers,
    ...smsProdivers,
    AddCustomerCommandHandler,
    AddCreditsCustomerCommandHandler,
    GetCustomersQueryHandler,
    GetCustomerBalanceQueryHandler,
    SendSMSCommandHandler
  ],
})
export class AppModule {}
