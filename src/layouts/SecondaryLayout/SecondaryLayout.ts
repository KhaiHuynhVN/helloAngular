import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Header } from "../components";

@Component({
   selector: "SecondaryLayout",
   standalone: true,
   templateUrl: "./SecondaryLayout.html",
   styleUrls: ["./SecondaryLayout.scss"],
   imports: [Header, RouterOutlet],
})
class SecondaryLayout {}
export default SecondaryLayout;
