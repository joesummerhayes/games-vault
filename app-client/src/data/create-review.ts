import GVType from "../../../@types";
import graphQl from "./graph-ql";

interface ReviewQLResult {
  createReview: GVType.Review;
}

const createReview = async (variables: GVType.Review): Promise<GVType.Review> => {
  const response = await graphQl.query<ReviewQLResult, GVType.Review>(`
    mutation createNewReview($console: String!, $images: [String]!, $rating: Float!, $review: String!, $synopsis: String!, $title: String!, $userId: String!) {
      createReview(reviewInput: {console: $console, images: $images, rating: $rating, review: $review, synopsis: $synopsis, userId: $userId}) {
        console
        images
        rating
        review
        synopsis
        title
        userId
      }
    }
  `, variables);
  if (variables === null) {
    throw new Error('There was a problem creating a review');
  }
  return response.createReview;
}

export default createReview;
