import { HttpInterceptorFn } from "@angular/common/http";
import { isPlatformBrowser } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";

const authInterceptor: HttpInterceptorFn = (req, next) => {
   const platformId = inject(PLATFORM_ID);

   // Skip on server-side
   if (!isPlatformBrowser(platformId)) {
      return next(req);
   }

   // Skip auth for public endpoints
   const publicUrls = ["/auth/login", "/auth/register", "/public"];
   const isPublic = publicUrls.some((url) => req.url.includes(url));

   if (isPublic) {
      return next(req);
   }

   // Get token from storage
   const token = localStorage.getItem("access_token");

   if (token) {
      const authReq = req.clone({
         setHeaders: {
            Authorization: `Bearer ${token}`,
         },
      });
      return next(authReq);
   }

   return next(req);
};

export { authInterceptor };
