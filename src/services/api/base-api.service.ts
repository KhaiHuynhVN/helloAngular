import { inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../utils/configs/environment";

abstract class BaseApiService {
   protected http = inject(HttpClient);
   protected abstract basePath: string;

   protected get baseUrl(): string {
      return `${environment.apiBaseUrl}/${this.basePath}`;
   }

   // ===== CRUD Operations =====

   protected getAll<T>(): Observable<T[]> {
      return this.http.get<T[]>(this.baseUrl);
   }

   protected getById<T>(id: string | number): Observable<T> {
      return this.http.get<T>(`${this.baseUrl}/${id}`);
   }

   protected create<T>(data: Partial<T>): Observable<T> {
      return this.http.post<T>(this.baseUrl, data);
   }

   protected update<T>(id: string | number, data: Partial<T>): Observable<T> {
      return this.http.put<T>(`${this.baseUrl}/${id}`, data);
   }

   protected remove<T>(id: string | number): Observable<T> {
      return this.http.delete<T>(`${this.baseUrl}/${id}`);
   }

   // ===== Helper Methods =====

   protected buildParams(params?: Record<string, unknown>): HttpParams {
      let httpParams = new HttpParams();

      if (params) {
         Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && value !== "") {
               httpParams = httpParams.set(key, String(value));
            }
         });
      }

      return httpParams;
   }
}

export { BaseApiService };
