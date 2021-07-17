export default `
type RootMutation {
  createUser(userInput: UserInputData!): User!
  createReview(reviewInput: ReviewInputData!): ReviewId!
}`;
