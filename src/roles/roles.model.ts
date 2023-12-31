import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './userRoles.model';

interface UserCreationProps {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, UserCreationProps> {
  @ApiProperty({example: 1, description: 'Unique ID'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'ADMIN', description: 'Unique role'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({example: 'Administrator', description: "Role's description"})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}
