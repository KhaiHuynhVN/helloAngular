import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import ROUTE_CONFIGS from "../../routeConfigs";

@Component({
   selector: "ProductDetailPage",
   standalone: true,
   templateUrl: "./ProductDetailPage.html",
   styleUrls: ["./ProductDetailPage.scss"],
})
class ProductDetailPage {
   route = inject(ActivatedRoute);
   productId = this.route.snapshot.params["productId"];
}

export default ProductDetailPage;
