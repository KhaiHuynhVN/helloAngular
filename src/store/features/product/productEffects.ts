import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as ProductActions from "./productActions";

@Injectable()
class ProductEffects {
   private actions$ = inject(Actions);

   // Example effect - replace with actual service call
   loadProducts$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ProductActions.loadProducts),
         mergeMap(() =>
            // TODO: Replace with actual API service
            of([]).pipe(
               map((products) => ProductActions.loadProductsSuccess({ products })),
               catchError((error) => of(ProductActions.loadProductsFailure({ error: error.message }))),
            ),
         ),
      ),
   );
}

export { ProductEffects };
