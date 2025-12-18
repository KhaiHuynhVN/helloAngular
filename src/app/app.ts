import { Component, inject, signal, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

import { AngularHeader } from "../components";

@Component({
   selector: "App",
   imports: [RouterOutlet, AngularHeader],
   templateUrl: "./app.html",
   styleUrl: "./app.css",
})
class App {
   protected readonly title = signal("DemonVN");

   private translate = inject(TranslateService);
   private platformId = inject(PLATFORM_ID);

   constructor() {
      if (isPlatformBrowser(this.platformId)) {
         this.translate.reloadLang("vi");
      }
   }
}

export default App;
