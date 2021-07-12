import GVType from '../../../../@types';
import Review, { ReviewI } from '../../modals/review';

interface CreateReview {
  reviewInput: GVType.Review;
}

export default {
  async createReview(args: CreateReview, _req: Request): Promise<ReviewI> {
    console.log('resolver hit');
    const { reviewInput } = args;
    const newReview = new Review(reviewInput);
    try {
      const review = await newReview.save();
      return review;
    } catch (e) {
      console.log(e);
      return newReview;
    }
  },
};
