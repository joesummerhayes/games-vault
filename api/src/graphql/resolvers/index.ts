import authResolvers from './auth';
import reviewResolvers from './review';

export default {
  ...authResolvers,
  ...reviewResolvers,
};
