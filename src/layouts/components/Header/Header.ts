import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { Icons } from "../../../assets";
import ROUTE_CONFIGS from "../../../routeConfigs";

@Component({
   selector: "Header",
   standalone: true,
   templateUrl: "./Header.html",
   styleUrls: ["./Header.scss"],
   imports: [Icons.AngularIcon, TranslateModule, RouterLink, RouterLinkActive],
})
class Header {
   private translate = inject(TranslateService);
   private router = inject(Router);
   protected routes = ROUTE_CONFIGS;

   navigate(path: string) {
      this.router.navigate([path]);
   }

   changeLang(event: Event) {
      const select = event.target as HTMLSelectElement;
      this.translate.use(select.value);
   }
}

export default Header;
