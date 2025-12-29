import { Component, inject, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { Store } from "@ngrx/store";

import { Product, productActions } from "../../../../store";
import ROUTE_CONFIGS from "../../../../routeConfigs";

@Component({
   selector: "ProductContainer",
   standalone: true,
   imports: [RouterLink, NgClass],
   templateUrl: "./ProductContainer.html",
   styleUrls: ["./ProductContainer.scss"],
})
class ProductContainer {
   @Input() products: Product[] = [];

   private store = inject(Store);

   protected ROUTE_CONFIGS = ROUTE_CONFIGS;

   public handleDeleteProduct(id: number): void {
      this.store.dispatch(productActions.deleteProduct({ id }));
   }
}

export default ProductContainer;
