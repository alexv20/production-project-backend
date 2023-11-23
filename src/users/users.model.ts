import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/userRoles.model';

interface UserCreationProps {
  email: string;
  username: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationProps> {
  @ApiProperty({example: 1, description: 'Unique ID'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'test@test.ru', description: 'email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: 'user007', description: 'unique username'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  username: string;

  @ApiProperty({example: 'qwerty123', description: 'password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]
}
