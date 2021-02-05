import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document{
  firstName: string;
  lastName: string;
  email: string;
}

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

export default mongoose.model<IUser>('User', userSchema);
