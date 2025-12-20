import { Routes } from "@angular/router";

import ROUTE_CONFIGS from "../routeConfigs";

const routes: Routes = [
   {
      path: "",
      loadComponent: () => import("../layouts/PrimaryLayout"),
      children: [
         {
            path: ROUTE_CONFIGS.HOME.path,
            loadComponent: () => import("../pages/HomePage"),
         },
      ],
   },
   {
      path: "",
      loadComponent: () => import("../layouts/SecondaryLayout"),
      children: [
         {
            path: ROUTE_CONFIGS.ABOUT.path,
            loadComponent: () => import("../pages/AboutPage"),
         },
      ],
   },
];

export default routes;
