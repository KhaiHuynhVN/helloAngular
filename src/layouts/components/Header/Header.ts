import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NgClass } from "@angular/common";
import { Store } from "@ngrx/store";

import { Icons } from "../../../assets";
import ROUTE_CONFIGS from "../../../routeConfigs";
import { productSelectors } from "../../../store";

@Component({
   selector: "Header",
   standalone: true,
   templateUrl: "./Header.html",
   styleUrls: ["./Header.scss"],
   imports: [Icons.AngularIcon, TranslateModule, RouterLink, RouterLinkActive, NgClass],
})
class Header {
   private translate = inject(TranslateService);
   private store = inject(Store);

   protected ROUTE_CONFIGS = ROUTE_CONFIGS;
   protected router = inject(Router);

   productSelected = this.store.selectSignal(productSelectors.selectSelectedProduct);

   changeLang(event: Event) {
      const select = event.target as HTMLSelectElement;
      this.translate.use(select.value);
   }

   isRouteActive(path: string): boolean {
      return this.router.url.startsWith(path);
   }
}

export default Header;
