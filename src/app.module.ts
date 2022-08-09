import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
// import { PrismaModule } from './prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user/user.service';
import { SystemService } from './system/system.service';
import { SystemController } from './system/system.controller';
import { SystemModule } from './system/system.module';
​
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    UserModule,
    AuthModule,
    SystemModule,
    // BookmarkModule,
    // PrismaModule,
  ],
  controllers: [AuthController, SystemController],
  providers: [AuthService, UserService, SystemService],
})
export class AppModule {}