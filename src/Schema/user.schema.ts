import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum Role {
  admin,
  manager,
  customer
}

export type UserDocument = User & Document;

@Schema()
export class User{
  @Prop()
  uid: number;

  @Prop([String])
  firstName: string;

  @Prop([String])
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  role: { type: String, enum: Role, default: Role.customer }

}

export const UserSchema = SchemaFactory.createForClass(User);