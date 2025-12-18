import { Component, Input, inject } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

import { Icons } from "../../assets";

@Component({
   selector: "AngularHeader",
   standalone: true,
   templateUrl: "./AngularHeader.html",
   styleUrls: ["./AngularHeader.scss"],
   imports: [Icons.AngularIcon, TranslateModule],
})
class AngularHeader {
   @Input() title: string = "";

   private translate = inject(TranslateService);

   changeLang(event: Event) {
      const select = event.target as HTMLSelectElement;
      this.translate.use(select.value);
   }
}

export default AngularHeader;
