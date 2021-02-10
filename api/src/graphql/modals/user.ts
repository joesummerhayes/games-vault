import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document{
  firstName: string;
  lastName: string;
  email: string;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IUser>('User', userSchema);
