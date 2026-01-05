interface Product {
   id: number;
   title: string;
   description: string;
   price: number;
   category: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   };
}

interface ProductState {
   products: Product[];
   categories: string[];
   selectedProduct: Product | null;
   selectedProductIdPath: number | string | null;
   loading: boolean;
   error: string | null;
}

const initialProductState: ProductState = {
   products: [],
   categories: [],
   selectedProduct: null,
   selectedProductIdPath: null,
   loading: false,
   error: null,
};

export { type Product, type ProductState, initialProductState };
