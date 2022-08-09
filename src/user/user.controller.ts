import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { userDto } from '../DTO/user.dto';
import  { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
//get user
    @Get()
    getAllUser() {
      return this.userService.getAllUsers();
    }
//get user by id
    @Get('getUserById/:id')
    getUserById(@Param('id') id: number) {
      return this.userService.getUserById(id);
    }
//update user by id
    @Put(':id')
    update(@Param('id') id: number, @Body() user: userDto) {
      return this.userService.updateUser(id, user);
    }
//add user
    @Post()
    addUser(@Body() user:userDto ) {
        return this.userService.addUser(user)
  }
//delete user by id
//   @Delete(':id')
//   deleteUser(@Param('id') id:string) :userDto{
//        return  UserService.deleteUser(id)
//  }

}
    

