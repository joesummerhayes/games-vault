import graphQL from './graph-ql';

interface UserQLResult {
  login: GVType.LoggedInUser;
}

interface LoginVariables {
  email: string;
  password: string;
}

const login = async (variables: GVType.LoginUserArgs): Promise<GVType.LoggedInUser | undefined> => {
  console.log('111', variables)
  try {
    const response = await graphQL.query<UserQLResult, LoginVariables>(`
    query loggingInuser($email: String!, $password: String!){
      login(email:$email, password:$password){
        token
        user{
          _id
          username
          email
        }
      }
    }`,
    variables);
    if (response === null) {
      throw new Error('There was a problem loggin in user');
    }
    return response.login;
  } catch(e: any) {
    console.log('!!!', e)
  }
};

export default login;
