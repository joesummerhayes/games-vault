export default `
type RootQuery {
  user: User!
  login(email: String!, password: String!): LoggedInUser!
  review(id: String!): Review!
}
`;
