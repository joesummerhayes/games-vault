export const queries = `
type RootQuery {
  user: User!
  login(email: String!, password: String!): LoggedInUser!
}
`