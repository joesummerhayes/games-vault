import { buildSchema } from 'graphql';

export default buildSchema(`
  type User {
    _id: ID!
    name: String!
    email: String
  }
  type RootQuery {
    user: User!
  }
  schema {
    query: RootQuery
  }
`);
