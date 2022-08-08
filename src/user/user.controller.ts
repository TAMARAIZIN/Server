import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { userDto } from '../DTO/user.dto';
import  { UserService } from './user.service';
@Controller('user')
export class UserController {
//get user
    @Get()
    getAllUser():userDto[] {
      return UserService.getAllUsers();
    }
//get user by id
    @Get(':id')
    getUserById(@Param('id') id: string):userDto {
      return UserService.getUserById(id);
    }
//update user by id
    @Put(':id')
    update(@Param('id') id: string, @Body() user: userDto) {
      return UserService.updateUser(id, user);
    }
//add user
    @Post()
    addUser(@Body() user:userDto ) :userDto{
        return UserService.addUser(user)
  }
//delete user by id
//   @Delete(':id')
//   deleteUser(@Param('id') id:string) :userDto{
//        return  UserService.deleteUser(id)
//  }

}
    

