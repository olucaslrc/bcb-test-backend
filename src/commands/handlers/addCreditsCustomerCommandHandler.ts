import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Customer from 'src/entities/customer.entity';
import { Inject } from '@nestjs/common';
import { AddCreditsCustomerCommand } from '../addCreditsCustomerCommand';

@CommandHandler(AddCreditsCustomerCommand)
export class AddCreditsCustomerCommandHandler
  implements ICommandHandler<AddCreditsCustomerCommand>
{
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private customersRepository: typeof Customer,
  ) {}

  async execute(command: AddCreditsCustomerCommand) {
    try {
      const customer = await this.customersRepository.findByPk(command.Id);

      if (!customer) {
        return 'Customer not found.';
      } else if (customer.Credits + command.Credits > customer.CreditsLimit) {
        return 'Credits outside bound allowed.';
      }

      customer.Credits += command.Credits;
      await customer.save();
      await this.customersRepository.sync();

      return 'Credits was added!';
    } catch (error) {
      throw new Error(error);
    }
  }
}
