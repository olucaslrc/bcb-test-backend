import { Test, TestingModule } from '@nestjs/testing';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

describe('CustomersController', () => {
  let customersController: CustomersController;
  let customersService: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController],
      providers: [CustomersService],
    }).compile();

    customersController = module.get<CustomersController>(CustomersController);
    customersService = module.get<CustomersService>(CustomersService);
  });

  describe('getCustomer', () => {
    it('should return an array of customers', async () => {
      const result = [];
      jest.spyOn(customersService, 'getCustomers').mockResolvedValue(result);

      expect(await customersController.getCustomer()).toBe(result);
    });
  });
});
