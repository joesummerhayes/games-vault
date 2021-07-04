import mongoose, { Schema, Document } from 'mongoose';

export interface ReviewI extends Document {
  console: string;
  images: string[];
  rating: number;
  review: string;
  synopsis: string;
  title: string;
  userId: string;
}

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  console: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model<ReviewI>('Review', reviewSchema);
