import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { retry, timeout } from "rxjs/operators";
import { BaseApiService } from "./api";
import { Product } from "../store";

@Injectable({
   providedIn: "root",
})
class ProductService extends BaseApiService {
   protected basePath = "products";

   // GET all products
   getProducts(): Observable<Product[]> {
      return this.getAll<Product>().pipe(timeout(10000), retry(2));
   }

   // GET product by id
   getProductById(id: number): Observable<Product> {
      return this.getById<Product>(id).pipe(timeout(5000), retry(1));
   }

   // GET products by category
   getProductsByCategory(category: string): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}/category/${category}`).pipe(timeout(10000), retry(2));
   }

   // GET all categories
   getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}/categories`).pipe(timeout(5000), retry(2));
   }

   // CREATE product
   createProduct(product: Omit<Product, "id" | "rating">): Observable<Product> {
      return this.create<Product>(product).pipe(timeout(5000), retry(1));
   }
}

export { ProductService };
