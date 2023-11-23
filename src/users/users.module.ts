import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { RolesService } from '../roles/roles.service';
import { UserRoles } from '../roles/userRoles.model';
import { RolesModule } from '../roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule
  ],
  exports: [UsersService]
})
export class UsersModule {}