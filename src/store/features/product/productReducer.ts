import { createReducer, on } from "@ngrx/store";

import { initialProductState } from "./productState";
import * as ProductActions from "./productActions";

const productReducer = createReducer(
   initialProductState,

   // Load Products
   on(ProductActions.loadProducts, (state) => ({
      ...state,
      loading: true,
      error: null,
   })),

   on(ProductActions.loadProductsSuccess, (state, { products }) => ({
      ...state,
      products,
      loading: false,
   })),

   on(ProductActions.loadProductsFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
   })),

   // Select Product
   on(ProductActions.selectProductById, (state, { productId }) => ({
      ...state,
      selectedProduct: state.products.find((product) => product.id === productId) ?? null,
   })),

   // Add Product
   on(ProductActions.addProduct, (state, { product, propTest }) => {
      console.log("propTest", propTest);

      return {
         ...state,
         products: [...state.products, product],
      };
   }),

   // Update Product
   on(ProductActions.updateProduct, (state, { product }) => ({
      ...state,
      products: state.products.map((p) => (p.id === product.id ? product : p)),
   })),

   // Delete Product
   on(ProductActions.deleteProduct, (state, { id }) => ({
      ...state,
      products: state.products.filter((p) => p.id !== id),
   })),
);

export { productReducer };
