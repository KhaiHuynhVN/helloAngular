import { Injectable, inject } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { filter, map, exhaustMap, catchError } from "rxjs/operators";

import ROUTE_CONFIGS from "../../../routeConfigs";
import { ProductService } from "../../../services";
import * as ProductActions from "./productActions";

@Injectable()
class ProductEffects {
   private actions$ = inject(Actions);
   private router = inject(Router);
   private productService = inject(ProductService);

   // Clear selected product when navigating away from product detail
   clearSelectedOnNavigate$ = createEffect(() =>
      this.router.events.pipe(
         filter((event): event is NavigationStart => event instanceof NavigationStart),
         filter((event) => !event.url.startsWith(ROUTE_CONFIGS.PRODUCT_DETAIL.fullPath)),
         map(() => ProductActions.selectProductById({ productId: null })),
      ),
   );

   // Load products from service
   // exhaustMap: ignore dispatch mới khi đang loading (tránh spam)
   loadProducts$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ProductActions.loadProducts),
         exhaustMap(() =>
            this.productService.getProducts().pipe(
               map((products) => ProductActions.loadProductsSuccess({ products })),
               catchError((error) => of(ProductActions.loadProductsFailure({ error: error.message }))),
            ),
         ),
      ),
   );
}

export { ProductEffects };
