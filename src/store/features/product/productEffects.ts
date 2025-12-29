import { Injectable, inject } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { filter, map, mergeMap, catchError } from "rxjs/operators";

import ROUTE_CONFIGS from "../../../routeConfigs";
import * as ProductActions from "./productActions";
import { initialProductState } from "./productState";

@Injectable()
class ProductEffects {
   private actions$ = inject(Actions);
   private router = inject(Router);

   // Clear selected product when navigating away from product detail
   clearSelectedOnNavigate$ = createEffect(() =>
      this.router.events.pipe(
         filter((event): event is NavigationStart => event instanceof NavigationStart),
         filter((event) => !event.url.startsWith(ROUTE_CONFIGS.PRODUCT_DETAIL.fullPath)),
         map(() => ProductActions.selectProductById({ productId: null })),
      ),
   );

   // Example effect - replace with actual service call
   loadProducts$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ProductActions.loadProducts),
         mergeMap(() =>
            // TODO: Replace with actual API service
            of([...initialProductState.products]).pipe(
               map((products) => ProductActions.loadProductsSuccess({ products })),
               catchError((error) => of(ProductActions.loadProductsFailure({ error: error.message }))),
            ),
         ),
      ),
   );
}

export { ProductEffects };
