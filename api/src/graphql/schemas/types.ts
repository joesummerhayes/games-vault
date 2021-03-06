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
type ReviewId {
  _id: String
}
type Review {
  _id: String!
  console: String!
  images: [String]!
  rating: String!
  review: String!
  synopsis: String!
  title: String!
  userId: String!
}
`;
