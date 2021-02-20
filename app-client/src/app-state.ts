export interface AppState {
  user?: {
    details: GVType.User;
    loggedIn: boolean;
  }
}