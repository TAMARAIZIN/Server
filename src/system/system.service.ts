import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { System, SystemDocument } from '../Schema/system.schema';
import { SystemDto } from '../DTO/system.dto';

import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class SystemService {
  constructor(
    @InjectModel('system')private readonly systemModel: Model<System>
    ) {}
//get all users
  async getAllSystem(){
    return await this.systemModel.find().exec();
  }
//get user by id
  async getSystemById(uid:number) {
    return this.systemModel.findOne({id:uid}).exec();
  }
//add user
  async addSystem(systemObj:SystemDto) {
    const system = new this.systemModel(systemObj);
    system.save();
    return "system added successfully  to the database.";
  }
//update user
  async updateSystem(uid:string,systemObj:SystemDto) {
     this.systemModel.updateOne({id:uid},systemObj);
  }
//delete user
  async deleteSystem(uid:string): Promise<void> { 
      this.systemModel.deleteOne({id:uid}).exec(); 
    }
}
