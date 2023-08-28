import { ApiProperty } from '@nestjs/swagger';

export class GetCustomerBalanceDTO {
  @ApiProperty()
  public readonly Id: Number;
}
