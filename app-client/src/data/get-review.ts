import graphQL from './graph-ql';

interface ReviewQLResult {
  review: GVType.Review;
}

interface IGetReview {
  id: string;
}

const getReview = async (variables: IGetReview): Promise<GVType.Review> => {
  const response = await graphQL.query<ReviewQLResult, IGetReview>(`
    query getReview($id: String!){
      review(id: $id) {
        console
        images
        rating
        synopsis
        title
        userId
        review
      }
    }`, variables);
  if (response === null) {
    throw new Error('could not get review details');
  }
  return response.review;
};

export default getReview;
