// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import { IRole } from './Role';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: IRole | string;  // string when not populated, IRole when populated
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role', required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
