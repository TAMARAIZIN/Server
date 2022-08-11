import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../Schema/user.schema';
import { UserDto } from '../DTO/user.dto';

import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel("user") private userModel: Model<User>
    ) {}
            

//get all users
  async getAllUsers() {
    return await this.userModel.find();
  }
//get user by id
  async getUserById(id:number): Promise<UserDto> {
    return await this.userModel.findOne({id:id});
  }
//add user
  async addUser(userObj:UserDto): Promise<string> {
    const user = new this.userModel(userObj);
    user.save();
    return "user added successfully  to the database.";
  }
//update user
  async updateUser(id:number,userObj:UserDto) : Promise<void> {
     this.userModel.updateOne({id:id},userObj);
  }
//delete user
  async deleteUser(id:string) : Promise<void> { 
      this.userModel.deleteOne({id:id}).exec(); 
    }
}
