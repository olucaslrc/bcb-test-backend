import { CustomerDTO } from 'src/models/dtos/customerDTO';

export class AddCustomerCommand {
    constructor(
        public readonly Customer: CustomerDTO
    ) {}
}