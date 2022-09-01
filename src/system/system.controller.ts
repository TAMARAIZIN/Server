import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SystemDto } from '../DTO/system.dto';
import  { SystemService } from './system.service';
@Controller('service')
export class SystemController {
    constructor(public systemService:SystemService) {}
//get systems
    @Get()
    getAllSystem() {
      return this.systemService.getAllSystem();
    }
//get system by id
    @Get(':uid')
    getUserById(@Param('uid') uid: number) {
      return this.systemService.getSystemById(uid);
    }
//update system by id
    @Put(':uid')
    update(@Param('uid') uid: string, @Body() system) {
      return this.systemService.updateSystem(uid, system);
    }
//add system
    @Post()
    addUser(@Body() system:SystemDto ) {
        return this.systemService.addSystem(system);
  }
// delete system by id
  @Delete(':uid')
  deleteUser(@Param('uid') uid:string) {
       return  this.systemService.deleteSystem(uid)
 }

}
    

