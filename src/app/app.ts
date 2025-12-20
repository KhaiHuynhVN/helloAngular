import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
   selector: "App",
   imports: [RouterOutlet],
   templateUrl: "./app.html",
   styleUrl: "./app.css",
})
class App {
   protected readonly title = signal("DemonVN");
}

export default App;
