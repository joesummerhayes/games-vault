import { buildSchema } from 'graphql';

export default buildSchema(`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String
  }
  type UserInputData {
    email: String!
    firstName: String!
    lastName: String!
    password: String!
  }
  type RootQuery {
    user(email: String!): User!
  }
  type RootMutation {
    createUser(userInput: UserInputData!): User!
  }
  schema {
    query: RootQuery
  }
`);
