import { CommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import Customer from 'src/entities/customer.entity';
import { Inject } from '@nestjs/common';
import { GetCustomersQuery } from '../getCustomersQuery';

@QueryHandler(GetCustomersQuery)
export class GetCustomersQueryHandler
  implements IQueryHandler<GetCustomersQuery>
{
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private customersRepository: typeof Customer,
  ) {}
  async execute() {
    try {
      return await this.customersRepository.findAll<Customer>();
    } catch (error) {
      throw new Error(error);
    }
  }
}
