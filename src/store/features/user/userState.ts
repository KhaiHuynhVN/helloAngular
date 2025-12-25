interface User {
   id: string;
   name: string;
   email: string;
   avatar?: string;
}

interface UserState {
   currentUser: User | null;
   isAuthenticated: boolean;
   loading: boolean;
   error: string | null;
}

const initialUserState: UserState = {
   currentUser: null,
   isAuthenticated: false,
   loading: false,
   error: null,
};

export { type User, type UserState, initialUserState };
