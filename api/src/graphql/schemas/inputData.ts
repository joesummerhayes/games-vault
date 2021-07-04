export default `
  input UserInputData {
    email: String!
    username: String!
    password: String!
  },
  input ReviewInputData {
    console: String!
    images: [String]!
    rating: Float!
    review: String!
    synopsis: String!
    title: String!
  }
`;
