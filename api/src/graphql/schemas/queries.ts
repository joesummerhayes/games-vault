export default `
type RootQuery {
  user: User!
  login(email: String!, password: String!): LoggedInUser!
}
`;
