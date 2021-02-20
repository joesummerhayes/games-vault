import graphQL from './graph-ql';

interface UserQLResult {
  createUser: GVType.User;
}

const createUser = async (variables: GVType.SignupUser): Promise<GVType.User> => {
  console.log('111', variables);
  const response = await graphQL.query<UserQLResult, GVType.SignupUser>(`
    mutation createNewUser($username: String!, $email: String!, $password: String!){
      createUser(userInput: {username: $username, email: $email, password: $password}) {
        _id
        username
        email
      }
    }`,
  variables);
  if (response === null) {
    throw new Error('There was a problem creating user');
  }
  return response.createUser;
};

export default createUser;
