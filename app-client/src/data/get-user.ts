import graphQL from './graph-ql';

interface UserQLResult {
  user: GVType.User;
}

const getUser = async (): Promise<GVType.User> => {
  const response = await graphQL.query<UserQLResult>(`
    query {
      user {
        _id
        username
        email
      }
    }`);
  if (response === null) {
    throw new Error('could not get user details');
  }
  return response.user;
};

export default getUser;
