import { Component, signal, effect, OnDestroy, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { Store } from "@ngrx/store";

import { testPipe_1, upperCasePipe } from "../../utils";
import ROUTE_CONFIGS from "../../routeConfigs";
import { productSelectors, productActions } from "../../store";
import { ProductContainer } from "./components";

@Component({
   selector: "HomePage",
   standalone: true,
   imports: [FormsModule, NgClass, testPipe_1, upperCasePipe, ProductContainer],
   templateUrl: "./HomePage.html",
   styleUrls: ["./HomePage.scss"],
})
class HomePage implements OnInit, OnDestroy {
   private store = inject(Store);

   protected readonly ROUTE_CONFIGS = ROUTE_CONFIGS;

   public isDisabled = signal<boolean>(false);
   public timer: NodeJS.Timeout | null = null;
   // Two-way binding example
   public name = "";

   // Store selectors
   public products = this.store.selectSignal(productSelectors.selectAllProducts);
   public loading = this.store.selectSignal(productSelectors.selectProductLoading);
   public error = this.store.selectSignal(productSelectors.selectProductError);

   constructor() {
      // Debug effect
      effect(() => {
         console.log("isDisabled", this.isDisabled());
         console.log("products", this.products());
      });

      // Error handling effect
      effect(() => {
         const err = this.error();
         if (err) {
            console.error("[ProductError]:", err);
            // Trong dự án thực: this.notificationService.showError(err);
         }
      });
   }

   ngOnInit(): void {
      // Load products khi component init
      this.store.dispatch(productActions.loadProducts());
   }

   ngOnDestroy(): void {
      if (this.timer) {
         clearTimeout(this.timer);
      }
   }

   public resetDisabled(): void {
      this.isDisabled.set(true);
      this.timer = setTimeout(() => {
         this.isDisabled.set(false);
      }, 1000);
   }

   public handleDeleteProduct(id: number): void {
      console.log("handleDeleteProduct", id);
      this.store.dispatch(productActions.deleteProduct({ id }));
   }
}

export default HomePage;
