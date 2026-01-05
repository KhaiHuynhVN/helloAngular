import { createAction, props } from "@ngrx/store";

import { Product } from "./productState";

// Load Products
const loadProducts = createAction("[Product] Load Products");
const loadProductsSuccess = createAction("[Product] Load Products Success", props<{ products: Product[] }>());
const loadProductsFailure = createAction("[Product] Load Products Failure", props<{ error: string }>());

// Select Product
const loadProductById = createAction("[Product] Load Product By Id", props<{ productId: number }>());
const loadProductByIdSuccess = createAction("[Product] Load Product By Id Success", props<{ product: Product }>());
const loadProductByIdFailure = createAction("[Product] Load Product By Id Failure", props<{ error: string }>());

// Select Product Id By Path
const selectProductIdByPath = createAction("[Product] Select Product Id By Path", props<{ productId: number | string | null }>());

// Add Product
const addProduct = createAction("[Product] Add Product", props<{ product: Product; propTest: string }>());

// Update Product
const updateProduct = createAction("[Product] Update Product", props<{ product: Product }>());

// Delete Product
const deleteProduct = createAction("[Product] Delete Product", props<{ id: number }>());

// Load Categories
const loadCategories = createAction("[Product] Load Categories");
const loadCategoriesSuccess = createAction("[Product] Load Categories Success", props<{ categories: string[] }>());
const loadCategoriesFailure = createAction("[Product] Load Categories Failure", props<{ error: string }>());

export {
   loadProducts,
   loadProductsSuccess,
   loadProductsFailure,
   loadProductById,
   loadProductByIdSuccess,
   loadProductByIdFailure,
   selectProductIdByPath,
   addProduct,
   updateProduct,
   deleteProduct,
   loadCategories,
   loadCategoriesSuccess,
   loadCategoriesFailure,
};
