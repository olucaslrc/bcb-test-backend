import Customer from 'src/entities/customer.entity';
import SMS from 'src/entities/sms.entity';

export const customersProdivers = [
  {
    provide: 'CUSTOMERS_REPOSITORY',
    useValue: Customer,
  },
];
