import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { AngularHeader } from "../components";

@Component({
   selector: "App",
   imports: [RouterOutlet, AngularHeader],
   templateUrl: "./app.html",
   styleUrl: "./app.css",
})
class App {
   protected readonly title = signal("DemonVN");
}

export default App;
