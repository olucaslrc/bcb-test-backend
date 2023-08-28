import { CommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import Customer from 'src/entities/customer.entity';
import { Inject } from '@nestjs/common';
import { GetCustomersQuery } from '../getCustomersQuery';
import { GetCustomerBalanceQuery } from '../getCustomerBalanceQuery';
import { CreditsDTO } from 'src/models/dtos/creditsDTO';
import { get } from 'http';

@QueryHandler(GetCustomerBalanceQuery)
export class GetCustomerBalanceQueryHandler
  implements IQueryHandler<GetCustomerBalanceQuery>
{
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private customersRepository: typeof Customer,
  ) {}
  async execute(query: GetCustomerBalanceQuery) {
    try {
      const getCredits = await this.customersRepository.findByPk(query.Id);

      if (!getCredits) {
        return 'Register not found.';
      }

      var result = new CreditsDTO();
      result.Id = getCredits.id;
      result.Credits = getCredits.Credits;

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
}
