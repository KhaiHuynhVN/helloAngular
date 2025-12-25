import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserState } from "./userState";

const selectUserState = createFeatureSelector<UserState>("user");

const selectCurrentUser = createSelector(selectUserState, (state) => state.currentUser);

const selectIsAuthenticated = createSelector(selectUserState, (state) => state.isAuthenticated);

const selectUserLoading = createSelector(selectUserState, (state) => state.loading);

const selectUserError = createSelector(selectUserState, (state) => state.error);

export { selectUserState, selectCurrentUser, selectIsAuthenticated, selectUserLoading, selectUserError };
