import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../Schema/user.schema';
import { userDto } from '../DTO/user.dto';

import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection
    ) {}
//get all users
  async getuser(): Promise<User[]> {
    return this.userModel.find().exec();
  }
//get user by id
  async getUserById(id:number): Promise<userDto> {
    return this.userModel.findOne({id:id}).exec();
  }
//add user
  async addUser(userObj:userDto): Promise<string> {
    const user = new this.userModel(userObj);
    user.save();
    return "user added successfully  to the database.";
  }
//update user
  async updateUser(id:number,userObj:userDto) : Promise<void> {
     this.userModel.updateOne({id:id},userObj);
  }
//delete user
  async deleteUser(id:number): Promise<void> { 
      this.userModel.deleteOne({id:id}).exec(); 
    }
}
