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
   selectedProduct: Product | null;
   loading: boolean;
   error: string | null;
}

const initialProductState: ProductState = {
   products: [],
   selectedProduct: null,
   loading: false,
   error: null,
};

export { type Product, type ProductState, initialProductState };
