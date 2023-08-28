import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddCustomerCommand } from '../addCustomerCommand';
import Customer from 'src/entities/customer.entity';
import { Inject } from '@nestjs/common';

@CommandHandler(AddCustomerCommand)
export class AddCustomerCommandHandler
  implements ICommandHandler<AddCustomerCommand>
{
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private customersRepository: typeof Customer,
  ) {}

  async execute(command: AddCustomerCommand) {
    try {
      var newCustomer = {
        Email: command.Customer.Email,
        CPF: command.Customer.CPF,
        CNPJ: command.Customer.CNPJ,
        Phone: command.Customer.Phone,
        CompanyName: command.Customer.CompanyName,
        Credits: command.Customer.Credits,
        CreditsLimit: command.Customer.CreditsLimit,
        Subscription: command.Customer.Subscription,
      };
      return (await this.customersRepository.create(newCustomer));
      // await this.customersRepository.sync();
      // return newCustomer;
    } catch (error) {
      throw new Error(error);
    }
  }
}
