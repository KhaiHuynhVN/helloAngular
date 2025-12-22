import { Component, signal, effect, OnDestroy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

import { testPipe_1, upperCasePipe } from "../../utils";

interface Item {
   id: number;
   name: string;
   description: string;
   price: number;
   quantity: number;
   image: string;
   category: string;
   brand: string;
   isActive: boolean;
}

@Component({
   selector: "HomePage",
   standalone: true,
   imports: [FormsModule, NgClass, testPipe_1, upperCasePipe],
   templateUrl: "./HomePage.html",
   styleUrls: ["./HomePage.scss"],
})
class HomePage implements OnDestroy {
   public isDisabled = signal<boolean>(false);
   public timer: NodeJS.Timeout | null = null;
   // Two-way binding example
   public name = "";
   // List render
   public list = signal<Item[]>([
      {
         id: 1,
         name: "Item 1",
         description: "Description 1",
         price: 100,
         quantity: 1,
         image: "https://via.placeholder.com/150",
         category: "Category 1",
         brand: "Brand 1",
         isActive: true,
      },
      {
         id: 2,
         name: "Item 2",
         description: "Description 2",
         price: 200,
         quantity: 2,
         image: "https://via.placeholder.com/150",
         category: "Category 2",
         brand: "Brand 2",
         isActive: false,
      },
      {
         id: 3,
         name: "Item 3",
         description: "Description 3",
         price: 300,
         quantity: 3,
         image: "https://via.placeholder.com/150",
         category: "Category 3",
         brand: "Brand 3",
         isActive: true,
      },
      {
         id: 4,
         name: "Item 4",
         description: "Description 4",
         price: 400,
         quantity: 4,
         image: "https://via.placeholder.com/150",
         category: "Category 4",
         brand: "Brand 4",
         isActive: false,
      },
      {
         id: 5,
         name: "Item 5",
         description: "Description 5",
         price: 500,
         quantity: 5,
         image: "https://via.placeholder.com/150",
         category: "Category 5",
         brand: "Brand 5",
         isActive: true,
      },
      {
         id: 6,
         name: "Item 6",
         description: "Description 6",
         price: 600,
         quantity: 6,
         image: "https://via.placeholder.com/150",
         category: "Category 6",
         brand: "Brand 6",
         isActive: false,
      },
   ]);

   constructor() {
      effect(() => {
         console.log("isDisabled", this.isDisabled());
      });
   }

   public resetDisabled(): void {
      this.isDisabled.set(true);
      this.timer = setTimeout(() => {
         this.isDisabled.set(false);
      }, 1000);
   }

   ngOnDestroy(): void {
      if (this.timer) {
         clearTimeout(this.timer);
      }
   }
}

export default HomePage;
