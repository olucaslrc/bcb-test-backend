import { ApiProperty } from "@nestjs/swagger"

export class CreditsDTO {
    @ApiProperty({
        description: 'The identification number of people.'
    })
    public Id: number

    @ApiProperty({
        description: 'How many credits you want to add for a customer.'
    })
    public Credits: number
}