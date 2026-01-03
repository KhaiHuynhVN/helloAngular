import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";

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

   productId = this.route.snapshot.params["productId"];
   product = this.store.selectSignal(productSelectors.selectSelectedProduct);

   ngOnInit() {
      this.store.dispatch(productActions.selectProductById({ productId: Number(this.productId) }));
   }
}

export default ProductDetailPage;
