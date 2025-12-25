import { Component, signal, effect, OnDestroy, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";

import { testPipe_1, upperCasePipe } from "../../utils";
import ROUTE_CONFIGS from "../../routeConfigs";
import { productSelectors, productActions, type Product } from "../../store";

@Component({
   selector: "HomePage",
   standalone: true,
   imports: [FormsModule, NgClass, testPipe_1, upperCasePipe, RouterLink],
   templateUrl: "./HomePage.html",
   styleUrls: ["./HomePage.scss"],
})
class HomePage implements OnDestroy {
   protected readonly ROUTE_CONFIGS = ROUTE_CONFIGS;
   private store = inject(Store);

   public isDisabled = signal<boolean>(false);
   public timer: NodeJS.Timeout | null = null;

   // Two-way binding example
   public name = "";

   // Get products from store
   public products = this.store.selectSignal(productSelectors.selectAllProducts);

   // Form fields for new product
   private readonly INITIAL_NEW_PRODUCT = {
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      category: "",
      brand: "",
   };
   public newProduct = { ...this.INITIAL_NEW_PRODUCT };

   constructor() {
      effect(() => {
         console.log("isDisabled", this.isDisabled());
         console.log("products", this.products());
      });
   }

   public resetDisabled(): void {
      this.isDisabled.set(true);
      this.timer = setTimeout(() => {
         this.isDisabled.set(false);
      }, 1000);
   }

   public handleAddProduct(): void {
      const product: Product = {
         id: Date.now(),
         name: this.newProduct.name,
         description: this.newProduct.description,
         price: this.newProduct.price,
         quantity: this.newProduct.quantity,
         image: `https://picsum.photos/seed/${Date.now()}/400/300`,
         category: this.newProduct.category,
         brand: this.newProduct.brand,
         isActive: true,
      };

      this.store.dispatch(productActions.addProduct({ product, propTest: "test hello" }));

      // Reset form
      this.newProduct = { ...this.INITIAL_NEW_PRODUCT };
   }

   public handleDeleteProduct(id: number): void {
      this.store.dispatch(productActions.deleteProduct({ id }));
   }

   ngOnDestroy(): void {
      if (this.timer) {
         clearTimeout(this.timer);
      }
   }
}

export default HomePage;
