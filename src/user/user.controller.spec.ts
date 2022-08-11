import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Test } from '@nestjs/testing';
import { userDto}  from '../DTO/user.dto'
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    // const moduleRef = await Test.createTestingModule({
    //     controllers: [UserController],
    //     providers: [UserService],
    //   }).compile();

    let u: Model<userDto>;
    userService = new UserService(u);
    userController = new UserController(userService);
    //   userService = moduleRef.get<UserService>(UserService);
    // userController = moduleRef.get<UserController>(UserController);
  });

  describe('getAllUsers', () => {
    it('should return an array of users', async () => {
      let result:userDto[];
      // jest.spyOn(userService, 'getAllUsers').mockImplementation(() => result);
      let users=await userService.getAllUsers();
      expect(typeof(users)).toBe(typeof(result));
    });
  });

  describe('getUserById', () => {
    it('should return an array of users', async () => {
      let result;
      jest.spyOn(userService, 'getUserById').mockImplementation(() => result);
      let user=await userService.getUserById(987);
      expect(user.email).toBe(result.email);
    });
  });


});
