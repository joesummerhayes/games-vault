import { Dispatch } from 'redux';
import { ActionTypes, ReviewFormData } from './types';
import { ReviewState } from '../reducers/review';
import GVType from '../../../@types';
import createReview from '../data/create-review';

export interface CreateReviewAction {
  type: ActionTypes.createReview;
  payload: ReviewState;
}

export const createReviewAction = (createReviewInputData: ReviewFormData) => async(dispatch: Dispatch): Promise<void> => {
  // call graphQL function
  try {
    const { images } = createReviewInputData;
    const imageStrings = images.trim().split(',');
    const serialisedReview = {
      ...createReviewInputData,
      images: imageStrings
    };

    const createdReview = await createReview(serialisedReview);
    if (!createdReview) {
      throw new Error('could not save review, please try again');
    };
    const { title } = createdReview;
    console.log(title);
  } catch (e) {
    console.error(e);
  }

  // call dispatch with form to pass the newly saved form data to the reducer
}
