import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import ROUTE_CONFIGS from "../../routeConfigs";
import { productActions } from "../../store";

@Component({
   selector: "ProductDetailPage",
   standalone: true,
   templateUrl: "./ProductDetailPage.html",
   styleUrls: ["./ProductDetailPage.scss"],
})
class ProductDetailPage implements OnInit {
   private store = inject(Store);

   route = inject(ActivatedRoute);
   productId = this.route.snapshot.params["productId"];

   ngOnInit() {
      this.store.dispatch(productActions.selectProductById({ productId: Number(this.productId) }));
   }
}

export default ProductDetailPage;
