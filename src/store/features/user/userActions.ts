import { createAction, props } from "@ngrx/store";

import { User } from "./userState";

// Login
const login = createAction("[User] Login", props<{ email: string; password: string }>());
const loginSuccess = createAction("[User] Login Success", props<{ user: User }>());
const loginFailure = createAction("[User] Login Failure", props<{ error: string }>());

// Logout
const logout = createAction("[User] Logout");
const logoutSuccess = createAction("[User] Logout Success");

// Load User
const loadUser = createAction("[User] Load User");
const loadUserSuccess = createAction("[User] Load User Success", props<{ user: User }>());
const loadUserFailure = createAction("[User] Load User Failure", props<{ error: string }>());

// Update User
const updateUser = createAction("[User] Update User", props<{ user: Partial<User> }>());

export { login, loginSuccess, loginFailure, logout, logoutSuccess, loadUser, loadUserSuccess, loadUserFailure, updateUser };
