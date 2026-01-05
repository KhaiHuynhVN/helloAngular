import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ProductState } from "./productState";

const selectProductState = createFeatureSelector<ProductState>("product");

const selectAllProducts = createSelector(selectProductState, (state) => state.products);

const selectSelectedProduct = createSelector(selectProductState, (state) => state.selectedProduct);

const selectProductLoading = createSelector(selectProductState, (state) => state.loading);

const selectProductError = createSelector(selectProductState, (state) => state.error);

const selectProductCount = createSelector(selectAllProducts, (products) => products.length);

const selectCategories = createSelector(selectProductState, (state) => state.categories);

const selectSelectedProductIdPath = createSelector(selectProductState, (state) => state.selectedProductIdPath);

export {
   selectProductState,
   selectAllProducts,
   selectSelectedProduct,
   selectProductLoading,
   selectProductError,
   selectProductCount,
   selectCategories,
   selectSelectedProductIdPath,
};
