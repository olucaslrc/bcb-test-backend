import { ApiProperty } from '@nestjs/swagger';

export class SMSDTO {
  @ApiProperty()
  public readonly Phone: string;
  @ApiProperty()
  public readonly Content: string;
  @ApiProperty()
  public readonly HasWhatsApp: boolean;
}
