import { createReducer, on } from "@ngrx/store";

import { initialUserState } from "./userState";
import * as UserActions from "./userActions";

const userReducer = createReducer(
   initialUserState,

   // Login
   on(UserActions.login, (state) => ({
      ...state,
      loading: true,
      error: null,
   })),

   on(UserActions.loginSuccess, (state, { user }) => ({
      ...state,
      currentUser: user,
      isAuthenticated: true,
      loading: false,
   })),

   on(UserActions.loginFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
   })),

   // Logout
   on(UserActions.logout, (state) => ({
      ...state,
      loading: true,
   })),

   on(UserActions.logoutSuccess, (state) => ({
      ...state,
      currentUser: null,
      isAuthenticated: false,
      loading: false,
   })),

   // Load User
   on(UserActions.loadUser, (state) => ({
      ...state,
      loading: true,
   })),

   on(UserActions.loadUserSuccess, (state, { user }) => ({
      ...state,
      currentUser: user,
      isAuthenticated: true,
      loading: false,
   })),

   on(UserActions.loadUserFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
   })),

   // Update User
   on(UserActions.updateUser, (state, { user }) => ({
      ...state,
      currentUser: state.currentUser ? { ...state.currentUser, ...user } : null,
   })),
);

export { userReducer };
