import { buildSchema } from 'graphql';

export default buildSchema(`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String
  }
  type RootQuery {
    user(email: String!): User!
  }
  schema {
    query: RootQuery
  }
`);
