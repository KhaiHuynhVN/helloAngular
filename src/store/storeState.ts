import { ProductState, UserState } from "./features";

interface AppState {
   product: ProductState;
   user: UserState;
}

export { type AppState };
