import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Product } from "../../../../store";
import ROUTE_CONFIGS from "../../../../routeConfigs";

@Component({
   selector: "ProductContainer",
   standalone: true,
   imports: [RouterLink],
   templateUrl: "./ProductContainer.html",
   styleUrls: ["./ProductContainer.scss"],
})
class ProductContainer {
   @Input() products: Product[] = [];

   @Output() onDeleteProduct = new EventEmitter<number>();

   protected ROUTE_CONFIGS = ROUTE_CONFIGS;

   public handleDeleteProduct(id: number): void {
      this.onDeleteProduct.emit(id);
   }
}

export default ProductContainer;
