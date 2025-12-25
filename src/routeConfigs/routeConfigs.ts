interface RouteConfig {
   path: string;
   fullPath: string;
   title?: string;
}

const ROUTE_CONFIGS = {
   HOME: {
      path: "",
      fullPath: "/",
      title: "Home",
   },
   ABOUT: {
      path: "about",
      fullPath: "/about",
      title: "About",
   },
   PRODUCT_DETAIL: {
      path: "product-detail/:productId",
      fullPath: "/product-detail",
      title: "Product Detail",
   },
   NOT_FOUND: {
      path: "**",
      fullPath: "/**",
      title: "Not Found",
   },
} as const satisfies Record<string, RouteConfig>;

type RouteKey = keyof typeof ROUTE_CONFIGS;

export default ROUTE_CONFIGS;
export { type RouteConfig, type RouteKey };
