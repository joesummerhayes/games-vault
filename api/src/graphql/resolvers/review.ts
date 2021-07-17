import GVType from '../../../../@types';
import Review from '../../modals/review';

interface CreateReview {
  reviewInput: GVType.CreateReview;
}

interface UserId {
  _id: string;
}

export default {
  async createReview(args: CreateReview, _req: Request): Promise<UserId> {
    const { reviewInput } = args;
    const newReview = new Review(reviewInput);
    if (!newReview) {
      throw new Error('problem saving review');
    }
    try {
      const review = await newReview.save();
      const id = review._id.toString();
      return { _id: id };
    } catch (e) {
      throw new Error('Failed to save review');
    }
  },
};
