import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
// import { PrismaModule } from './prisma/prisma.module';
import { MongooseModule } from '@nestjs/mongoose';
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
})
export class AppModule {}