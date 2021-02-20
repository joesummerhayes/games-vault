export const types = `
type User {
  _id: ID!
  username: String
  email: String
}
type LoggedInUser {
  token: String
  user: User
}
`;
