import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { routes } from "./app.routes";
import { provideTranslation } from "../utils";
import { appReducers, ProductEffects, UserEffects } from "../store";

export const appConfig: ApplicationConfig = {
   providers: [
      provideBrowserGlobalErrorListeners(),
      provideRouter(routes),
      provideClientHydration(withEventReplay()),
      provideHttpClient(withFetch()),
      ...provideTranslation(),
      provideStore(appReducers),
      provideEffects([ProductEffects, UserEffects]),
      provideStoreDevtools({
         maxAge: 25,
         logOnly: !isDevMode(),
         autoPause: true,
         trace: false,
         traceLimit: 75,
      }),
   ],
};
