import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { NgClass } from "@angular/common";

import { Icons } from "../../../assets";
import ROUTE_CONFIGS from "../../../routeConfigs";

@Component({
   selector: "Header",
   standalone: true,
   templateUrl: "./Header.html",
   styleUrls: ["./Header.scss"],
   imports: [Icons.AngularIcon, TranslateModule, RouterLink, RouterLinkActive, NgClass],
})
class Header {
   protected ROUTE_CONFIGS = ROUTE_CONFIGS;

   private translate = inject(TranslateService);
   protected router = inject(Router);

   navigate(path: string) {
      this.router.navigate([path], { replaceUrl: true });
   }

   changeLang(event: Event) {
      const select = event.target as HTMLSelectElement;
      this.translate.use(select.value);
   }

   isRouteActive(path: string): boolean {
      return this.router.url.startsWith(path);
   }
}

export default Header;
