import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseApiService } from "./api";
import { Product } from "../store";

@Injectable({
   providedIn: "root",
})
class ProductService extends BaseApiService {
   protected basePath = "products";

   // GET all products
   getProducts(): Observable<Product[]> {
      return this.getAll<Product>();
   }

   // GET product by id
   getProductById(id: number): Observable<Product> {
      return this.getById<Product>(id);
   }

   // GET products by category
   getProductsByCategory(category: string): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}/category/${category}`);
   }

   // GET all categories
   getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}/categories`);
   }
}

export { ProductService };
