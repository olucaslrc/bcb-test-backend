import { Injectable, Inject } from '@nestjs/common';
import Customer from 'src/entities/customer.entity';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddCustomerCommand } from 'src/commands/addCustomerCommand';
import { AddCreditsCustomerCommand } from 'src/commands/addCreditsCustomerCommand';
import { GetCustomersQuery } from 'src/queries/getCustomersQuery';
import { CustomerDTO } from 'src/models/dtos/customerDTO';
import { CreditsDTO } from 'src/models/dtos/creditsDTO';
import { GetCustomerBalanceQuery } from 'src/queries/getCustomerBalanceQuery';
import { SendSMSCommand } from 'src/commands/sendSMSCommand';
import { SMSDTO } from 'src/models/dtos/smsDTO';

@Injectable()
export class CustomersService {
  constructor(
    private CommandBus: CommandBus,
    private QueryBus: QueryBus,
  ) {}

  async getCustomers(): Promise<Customer[]> {
    return this.QueryBus.execute(new GetCustomersQuery());
  }

  async addCustomer(data: CustomerDTO): Promise<CustomerDTO> {
    return this.CommandBus.execute(new AddCustomerCommand(data));
  }

  async addCredits(data: CreditsDTO): Promise<string> {
    return this.CommandBus.execute(new AddCreditsCustomerCommand(data.Id, data.Credits));
  }

  async getCustomerBalance(id: number): Promise<CreditsDTO> {
    return this.QueryBus.execute(new GetCustomerBalanceQuery(id));
  }

  async sendSMS(data: SMSDTO): Promise<string> {
    return this.CommandBus.execute(new SendSMSCommand(data));
  }

  async changeBound(): Promise<string> {
    return null;
  }

  async changeSubscription(): Promise<string> {
    return null;
  }
}
