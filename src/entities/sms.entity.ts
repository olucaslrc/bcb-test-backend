import { Column, Table, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Customer from './customer.entity';

@Table
export default class SMS extends Model {
  @Column
  public Phone: string;

  @Column
  public HasWhatsApp: boolean;

  @Column
  public Content: string;
}
