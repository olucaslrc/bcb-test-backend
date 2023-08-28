import { SMSDTO } from 'src/models/dtos/smsDTO';

export class SendSMSCommand {
  constructor(public readonly SMS: SMSDTO) {}
}
