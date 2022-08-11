import { Injectable, NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../DTO/user.dto';
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
  async getUserById(id:number): Promise<User> {
    return await this.userModel.findOne({id:id});
  }
//add user
  async addUser(userObj:User): Promise<string> {
    const user = new this.userModel(userObj);
    user.save();
    return "user added successfully  to the database.";
  }
//update user
  async updateUser(id:number,userObj:User) : Promise<void> {
     this.userModel.updateOne({id:id},userObj);
  }
//delete user
  async deleteUser(id:string) : Promise<void> { 
      this.userModel.deleteOne({id:id}).exec(); 
    }
}
