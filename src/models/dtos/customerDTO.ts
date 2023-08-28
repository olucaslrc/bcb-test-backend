import { ApiProperty } from '@nestjs/swagger';
import Subscription from '../enums/subscription';

export class CustomerDTO {
  public Id: number;
  @ApiProperty()
  public Email: string;

  @ApiProperty()
  public CPF: string;

  @ApiProperty()
  public CNPJ: string;

  @ApiProperty()
  public Phone: string;

  @ApiProperty()
  public CompanyName: string;

  @ApiProperty()
  public Credits: number;

  @ApiProperty()
  public CreditsLimit: number;

  @ApiProperty()
  public Subscription: Subscription;
}
