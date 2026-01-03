import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http";
import { isPlatformBrowser } from "@angular/common";
import { catchError, throwError } from "rxjs";
import { inject, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";

const errorInterceptor: HttpInterceptorFn = (req, next) => {
   const router = inject(Router);
   const platformId = inject(PLATFORM_ID);
   const isBrowser = isPlatformBrowser(platformId);

   return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
         let errorMessage = "An unexpected error occurred";

         switch (error.status) {
            case 401:
               // Unauthorized - redirect to login
               if (isBrowser) {
                  localStorage.removeItem("access_token");
               }
               router.navigate(["/login"]);
               errorMessage = "Session expired. Please login again.";
               break;

            case 403:
               errorMessage = "You do not have permission to access this resource.";
               break;

            case 404:
               errorMessage = "Resource not found.";
               break;

            case 422:
               // Validation errors
               errorMessage = error.error?.message || "Validation failed.";
               break;

            case 500:
               errorMessage = "Server error. Please try again later.";
               break;

            case 0:
               errorMessage = "Network error. Please check your connection.";
               break;

            default:
               errorMessage = error.error?.message || error.message;
         }

         console.error(`[HTTP Error ${error.status}]:`, errorMessage);

         return throwError(() => ({
            message: errorMessage,
            statusCode: error.status,
            errors: error.error?.errors,
         }));
      }),
   );
};

export { errorInterceptor };
