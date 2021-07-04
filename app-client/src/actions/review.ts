import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { ReviewState } from '../reducers/review';
import GVType from '../../../@types';

export interface CreateReviewAction {
  type: ActionTypes.createReview;
  payload: ReviewState;
}

export const createReviewAction = (createReviewInputData: GVType.Review) => async(dispatch: Dispatch) => {
  // call graphQL function

  // call dispatch with form to pass the newly saved form data to the reducer
}