import GVType from "../../../@types";
import graphQl from "./graph-ql";

interface ReviewQLResult {
  createReview: {
    _id: string
  }
}

export const createReview = async (variables: GVType.CreateReview): Promise<string> => {
  const response = await graphQl.query<ReviewQLResult, GVType.CreateReview>(`
    mutation createNewReview($console: String!, $images: [String]!, $rating: String!, $review: String!, $synopsis: String!, $title: String!, $userId: String!) {
      createReview(reviewInput: {console: $console, images: $images, rating: $rating, review: $review, synopsis: $synopsis, title: $title, userId: $userId}) {
        _id
      }
    }
  `, variables);
  if (variables === null) {
    throw new Error('There was a problem creating a review');
  }
  return response.createReview._id;
}

export default createReview;
