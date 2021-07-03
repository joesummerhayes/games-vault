export default `
  input UserInputData {
    email: String!
    username: String!
    password: String!
  },
  input ReviewInputData {
    title: String!
    synopsis: String!
    review: String!
    console: String!
    images: [String]!
    rating: Float!
  }
`;
