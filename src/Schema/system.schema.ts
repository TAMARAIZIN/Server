import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SystemDocument = System & Document;

@Schema()
export class System{
  @Prop()
  uid: number;

  @Prop([String])
  topic: string;

  @Prop([String])
  objectName: string;

  @Prop()
  owner: number;

}

export const SystemSchema = SchemaFactory.createForClass(System);