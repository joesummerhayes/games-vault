import GVType from '../../../@types';
import { Action, ActionTypes } from '../actions/types';

export interface ReviewState extends GVType.Review {}

const createReviewReducer = (reviewState: ReviewState, action: Action): ReviewState => {  
  switch (action.type) {
    case ActionTypes.createReview: {
      const { payload } = action;
      return { ...payload };
    } default:
      return reviewState
  }
}

export default createReviewReducer;