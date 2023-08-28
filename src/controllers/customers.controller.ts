import { Controller, Get, Post, Body, Query, Patch } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import Customer from 'src/entities/customer.entity';
import { CreditsDTO } from 'src/models/dtos/creditsDTO';
import { CustomerDTO } from 'src/models/dtos/customerDTO';
import { GetCustomerBalanceDTO } from 'src/models/dtos/getCustomerBalanceDTO';
import { SMSDTO } from 'src/models/dtos/smsDTO';
import { CustomersService } from 'src/services/customers.service';

@Controller()
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get('/customers')
  async getCustomer(): Promise<Customer[]> {
    return this.customersService.getCustomers();
  }

  @Post('/customers/add')
  @ApiBody({ type: CustomerDTO })
  async addCustomer(@Body() data: CustomerDTO): Promise<CustomerDTO> {
    return this.customersService.addCustomer(data);
  }

  @Post('/customers/add/credits')
  @ApiBody({ type: CreditsDTO })
  async addCredits(@Body() data: CreditsDTO): Promise<string> {
    return this.customersService.addCredits(data);
  }

  @Get('/customer/balance')
  async getCustomerBalance(@Query('id') id: number): Promise<CreditsDTO> {
    return this.customersService.getCustomerBalance(id);
  }

  @Post('/sms/send')
  @ApiBody({ type: SMSDTO })
  async sendSMS(@Body() data: SMSDTO): Promise<string> {
    return this.customersService.sendSMS(data);
  }

  @Patch('/customer/change/bound')
  async changeBound(): Promise<string> {
    return null;
  }

  @Patch('/customer/change/subscription')
  async changeSubscription(): Promise<string> {
    return null;
  }
}
