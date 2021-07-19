import { Dispatch } from 'redux';
import { ActionTypes, ReviewFormData } from './types';
import { ReviewState } from '../reducers/review';
import createReview from '../data/create-review';
import history from '../history';
export interface CreateReviewAction {
  type: ActionTypes.createReview;
  payload: ReviewState;
}

// TODO: consider moving this logic to a normal util function seen as we are not actually setting any sort of state
export const createReviewAction = (createReviewInputData: ReviewFormData) => async(dispatch: Dispatch): Promise<void> => {
  // call graphQL function
  try {
    const { images } = createReviewInputData;
    const imageStrings = images.trim().replace(/(\r\n|\n|\r)/gm, "").split(',');
    const serialisedReview = {
      ...createReviewInputData,
      images: imageStrings
    };
    const createdReviewId = await createReview(serialisedReview);
    if (!createdReviewId) {
      throw new Error('could not save review, please try again');
    };
    // route user to review page passing in newly created review id as a query parameter
    history.push(`/review/${createdReviewId}`)
  } catch (e) {
    console.error(e);
  }
}


