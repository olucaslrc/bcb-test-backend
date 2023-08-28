import { Module } from '@nestjs/common';
import { CustomersController } from 'src/controllers/customers.controller';
import { CustomersService } from 'src/services/customers.service';
import { DatabaseModule } from './database.module';
import { CqrsModule } from '@nestjs/cqrs';
import { smsProdivers } from 'src/providers/sms.provider';

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [CustomersController],
  providers: [
    CustomersService,
    ...smsProdivers,
  ],
})
export class SMSModule {}
