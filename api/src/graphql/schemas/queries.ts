export const queries = `
type RootQuery {
  user(email: String!): User!
  login(email: String!, password: String!): LoggedInUser!
}
`