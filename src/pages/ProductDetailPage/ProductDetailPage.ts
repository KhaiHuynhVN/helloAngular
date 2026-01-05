import { Component, inject, OnInit, DestroyRef } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import ROUTE_CONFIGS from "../../routeConfigs";
import { productActions, productSelectors } from "../../store";

@Component({
   selector: "ProductDetailPage",
   standalone: true,
   imports: [RouterLink],
   templateUrl: "./ProductDetailPage.html",
   styleUrls: ["./ProductDetailPage.scss"],
})
class ProductDetailPage implements OnInit {
   protected readonly ROUTE_CONFIGS = ROUTE_CONFIGS;
   private store = inject(Store);
   private route = inject(ActivatedRoute);
   private destroyRef = inject(DestroyRef);

   product = this.store.selectSignal(productSelectors.selectSelectedProduct);

   ngOnInit() {
      // Reactive: auto update khi route params thay đổi
      this.route.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
         const productId = Number(params["productId"]);
         this.store.dispatch(productActions.loadProductById({ productId }));
         this.store.dispatch(productActions.selectProductIdByPath({ productId }));
      });
   }
}

export default ProductDetailPage;
