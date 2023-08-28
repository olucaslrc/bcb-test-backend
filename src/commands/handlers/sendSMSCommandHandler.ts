import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddCustomerCommand } from '../addCustomerCommand';
import Customer from 'src/entities/customer.entity';
import { Inject } from '@nestjs/common';
import { SendSMSCommand } from '../sendSMSCommand';
import SMS from 'src/entities/sms.entity';
import { get } from 'http';
import Subscription from 'src/models/enums/subscription';
import { DecimalDataType } from 'sequelize';

@CommandHandler(SendSMSCommand)
export class SendSMSCommandHandler implements ICommandHandler<SendSMSCommand> {
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private customersRepository: typeof Customer,
    @Inject('SMS_REPOSITORY')
    private smsRepository: typeof SMS,
  ) {}

  async execute(command: SendSMSCommand) {
    try {
        let smsPrice = 0.25;
      const getCustomer = await this.customersRepository.findOne({
        where: {
          Phone: command.SMS.Phone,
        },
      });

      if (!getCustomer) {
        return 'Customer not found.';
      }

      const newSMS = {
        Phone: command.SMS.Phone,
        Content: command.SMS.Content,
        HasWhatsApp: command.SMS.HasWhatsApp,
      };

      if (getCustomer.Subscription == Subscription.Prepaid) {
        if (getCustomer.Credits > 0.25) {
          getCustomer.Credits -= 0.25;
          await getCustomer.save();
          await this.smsRepository.create(newSMS);
          await this.smsRepository.sync();
          return 'SMS was sended successfully.';
        }
        return 'SMS dont was sended. Insufficient funds.';
      } else {
        if (getCustomer.Credits + 0,25 > getCustomer.CreditsLimit) {
            return 'You no have Pos-Paid limit to send SMS.';
        }
        getCustomer.Credits += 0,25;
        await getCustomer.save();
        await this.smsRepository.create(newSMS);
        await this.smsRepository.sync();
        return 'SMS was sended successfully. You bills was updated with new balance.';
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
