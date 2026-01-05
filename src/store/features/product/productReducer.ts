import { createReducer, on, State } from "@ngrx/store";

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

   // Load Product By Id
   on(ProductActions.loadProductById, (state, { productId }) => ({
      ...state,
      loading: true,
      error: null,
   })),

   on(ProductActions.loadProductByIdSuccess, (state, { product }) => ({
      ...state,
      selectedProduct: product,
      loading: false,
   })),

   on(ProductActions.loadProductByIdFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
   })),

   // Select Product Id By Path
   on(ProductActions.selectProductIdByPath, (state, { productId }) => ({
      ...state,
      selectedProductIdPath: productId,
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

   // Load Categories
   on(ProductActions.loadCategories, (state) => ({
      ...state,
      loading: true,
      error: null,
   })),

   on(ProductActions.loadCategoriesSuccess, (state, { categories }) => ({
      ...state,
      loading: false,
      categories,
   })),

   on(ProductActions.loadCategoriesFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
   })),
);

export { productReducer };
