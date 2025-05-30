import mongoose, { Document, Schema } from 'mongoose';
import { IRole } from './Role'; // Import the Role interface

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: IRole;  // Ensure the role is typed as IRole
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',  // Reference to the Role model
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
