import Subscription from '../models/enums/subscription';
import { Column, Table, Model, HasMany } from 'sequelize-typescript';

@Table
export default class Customer extends Model {
  @Column
  public Email: string;

  @Column
  public CPF: string;

  @Column
  public CNPJ: string;

  @Column
  public Phone: string;

  @Column
  public CompanyName: string;

  @Column('decimal')
  public Credits: number;

  @Column('decimal')
  public CreditsLimit: number;

  @Column
  public Subscription: Subscription;
}
