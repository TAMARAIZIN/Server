import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SystemDocument = System & Document;

@Schema()
export class System{

  constructor() {
  }
  @Prop()
  uid: number;

  @Prop()
  topic: string;

  @Prop()
  objectName: string;

  @Prop()
  owner: number;

}

export const SystemSchema = SchemaFactory.createForClass(System);