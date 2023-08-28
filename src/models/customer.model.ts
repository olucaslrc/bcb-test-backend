import Subscription from './enums/subscription';

class CustomerModel {
  constructor(
    id: number,
    email: string,
    phone: string,
    cpf: string,
    cnpj: string,
    companyName: string,
    credits: number,
    subscription: Subscription,
  ) {
    this.Id = id;
    this.Email = email;
    this.CPF = cpf;
    this.CNPJ = cnpj;
    this.Phone = phone;
    this.CompanyName = companyName;
    this.Credits = credits;
    this.Subscription = subscription;
  }

  public Id!: number;
  public Email!: string;
  public CPF!: string;
  public CNPJ!: string;
  public Phone!: string;
  public CompanyName!: string;
  public Credits!: number;
  public Subscription!: string;
}

export default CustomerModel;
