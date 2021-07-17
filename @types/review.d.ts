export interface CreateReview {
  console: string;
  images: string[];
  rating: number;
  review: string;
  synopsis: string;
  title: string;
  userId: string;
}

export interface Review extends CreateReview {
  _id: string;
}
