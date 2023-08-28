export class AddCreditsCustomerCommand {
  constructor(
    public readonly Id: number,
    public readonly Credits: number,
  ) {}
}
