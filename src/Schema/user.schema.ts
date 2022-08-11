import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// export enum Role {
//   admin,
//   manager,
//   customer
// }

export type UserDocument = User & Document;

@Schema()
export class User{
  @Prop()
  uid: number;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  // @Prop()
  // role: { type: String, enum: Role, default: "customer" }
  // role: { type: String, enum:eRole, required: true, default: "customer" }
}

export const UserSchema = SchemaFactory.createForClass(User);