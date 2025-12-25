import { ActionReducerMap } from "@ngrx/store";

import { AppState } from "./storeState";
import { productReducer, userReducer } from "./features";

const appReducers: ActionReducerMap<AppState> = {
   product: productReducer,
   user: userReducer,
};

export { appReducers };
