import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { shareReplay, retry, timeout } from "rxjs/operators";
import { BaseApiService } from "./api";
import { Product } from "../store";

@Injectable({
   providedIn: "root",
})
class ProductService extends BaseApiService {
   protected basePath = "products";

   // Cache categories (hiếm thay đổi)
   private categories$: Observable<string[]> | null = null;

   // GET all products
   getProducts(): Observable<Product[]> {
      return this.getAll<Product>().pipe(
         timeout(10000), // timeout 10s
         retry(2), // retry 2 lần nếu fail
      );
   }

   // GET product by id
   getProductById(id: number): Observable<Product> {
      return this.getById<Product>(id).pipe(timeout(5000), retry(1));
   }

   // GET products by category
   getProductsByCategory(category: string): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}/category/${category}`).pipe(timeout(10000), retry(2));
   }

   // GET all categories - CACHED
   getCategories(): Observable<string[]> {
      if (!this.categories$) {
         this.categories$ = this.http.get<string[]>(`${this.baseUrl}/categories`).pipe(
            timeout(5000),
            retry(2),
            shareReplay(1), // cache result, share với tất cả subscribers
         );
      }
      return this.categories$;
   }

   // Clear cache nếu cần refresh
   clearCategoriesCache(): void {
      this.categories$ = null;
   }
}

export { ProductService };
