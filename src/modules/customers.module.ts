import { Module } from '@nestjs/common';
import { CustomersController } from 'src/controllers/customers.controller';
import { CustomersService } from 'src/services/customers.service';
import { customersProdivers } from 'src/providers/customers.providers';
import { DatabaseModule } from './database.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [DatabaseModule, CqrsModule],
  controllers: [CustomersController],
  providers: [
    CustomersService,
    ...customersProdivers,
  ],
})
export class ConsutomersModule {}
