import { createAction, props } from "@ngrx/store";

import { Product } from "./productState";

// Load Products
const loadProducts = createAction("[Product] Load Products");
const loadProductsSuccess = createAction("[Product] Load Products Success", props<{ products: Product[] }>());
const loadProductsFailure = createAction("[Product] Load Products Failure", props<{ error: string }>());

// Select Product
const selectProductById = createAction("[Product] Select Product By Id", props<{ productId: number | null }>());

// Add Product
const addProduct = createAction("[Product] Add Product", props<{ product: Product; propTest: string }>());

// Update Product
const updateProduct = createAction("[Product] Update Product", props<{ product: Product }>());

// Delete Product
const deleteProduct = createAction("[Product] Delete Product", props<{ id: number }>());

export { loadProducts, loadProductsSuccess, loadProductsFailure, selectProductById, addProduct, updateProduct, deleteProduct };
