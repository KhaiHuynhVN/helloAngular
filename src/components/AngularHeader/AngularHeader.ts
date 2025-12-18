import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

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
}

export default AngularHeader;
