export default `
type User {
  _id: ID!
  username: String
  email: String
}
type LoggedInUser {
  token: String
  user: User
}
type Review {
  title: String!
  synopsis: String!
  review: String!
  console: String!
  images: [String]!
  rating: Float!
}
`;
