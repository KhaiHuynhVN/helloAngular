import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as UserActions from "./userActions";

@Injectable()
class UserEffects {
   private actions$ = inject(Actions);

   // Example effect - replace with actual auth service
   login$ = createEffect(() =>
      this.actions$.pipe(
         ofType(UserActions.login),
         mergeMap(({ email, password }) =>
            // TODO: Replace with actual auth service
            of({ id: "1", name: "User", email }).pipe(
               map((user) => UserActions.loginSuccess({ user })),
               catchError((error) => of(UserActions.loginFailure({ error: error.message }))),
            ),
         ),
      ),
   );

   logout$ = createEffect(() =>
      this.actions$.pipe(
         ofType(UserActions.logout),
         map(() => UserActions.logoutSuccess()),
      ),
   );
}

export { UserEffects };
