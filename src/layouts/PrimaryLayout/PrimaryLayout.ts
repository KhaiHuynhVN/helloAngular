import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Header, Footer } from "../components";

@Component({
   selector: "PrimaryLayout",
   standalone: true,
   imports: [RouterOutlet, Header, Footer],
   templateUrl: "./PrimaryLayout.html",
   styleUrls: ["./PrimaryLayout.scss"],
})
class PrimaryLayout {}

export default PrimaryLayout;
