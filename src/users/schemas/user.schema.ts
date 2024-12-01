import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { isEmail, Min } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ required: true })
  email: string;
  @Prop()
  password: string;

  @Prop()
  avatar: string;

  @Prop()
  phone: string;

  @Prop()
  address: string;

  @Prop()
  createAt: string;

  @Prop()
  updateAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
