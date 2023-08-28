import SMS from 'src/entities/sms.entity';

export const smsProdivers = [
  {
    provide: 'SMS_REPOSITORY',
    useValue: SMS,
  },
];
