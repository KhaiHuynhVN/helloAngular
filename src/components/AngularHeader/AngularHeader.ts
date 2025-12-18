import { Component, Input } from "@angular/core";

import { Icons } from "../../assets";

@Component({
   selector: "AngularHeader",
   templateUrl: "./AngularHeader.html",
   styleUrls: ["./AngularHeader.scss"],
   imports: [Icons.AngularIcon],
})
class AngularHeader {
   @Input() title: string = "";
}

export default AngularHeader;
