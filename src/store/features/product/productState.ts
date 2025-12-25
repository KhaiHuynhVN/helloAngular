interface Product {
   id: number;
   name: string;
   description: string;
   price: number;
   quantity: number;
   image: string;
   category: string;
   brand: string;
   isActive: boolean;
}

interface ProductState {
   products: Product[];
   selectedProduct: Product | null;
   loading: boolean;
   error: string | null;
}

const initialProductState: ProductState = {
   products: [
      {
         id: 1,
         name: "Wireless Headphones",
         description: "Premium noise-canceling wireless headphones with 30hr battery life",
         price: 199,
         quantity: 15,
         image: "https://picsum.photos/seed/headphones/400/300",
         category: "Electronics",
         brand: "Sony",
         isActive: true,
      },
      {
         id: 2,
         name: "Running Shoes",
         description: "Lightweight breathable running shoes for ultimate comfort",
         price: 129,
         quantity: 8,
         image: "https://picsum.photos/seed/shoes/400/300",
         category: "Sports",
         brand: "Nike",
         isActive: true,
      },
      {
         id: 3,
         name: "Smart Watch",
         description: "Fitness tracker with heart rate monitor and GPS",
         price: 299,
         quantity: 0,
         image: "https://picsum.photos/seed/watch/400/300",
         category: "Electronics",
         brand: "Apple",
         isActive: false,
      },
      {
         id: 4,
         name: "Backpack",
         description: "Water-resistant laptop backpack with USB charging port",
         price: 79,
         quantity: 23,
         image: "https://picsum.photos/seed/backpack/400/300",
         category: "Accessories",
         brand: "Herschel",
         isActive: true,
      },
      {
         id: 5,
         name: "Coffee Maker",
         description: "Automatic drip coffee maker with programmable timer",
         price: 89,
         quantity: 12,
         image: "https://picsum.photos/seed/coffee/400/300",
         category: "Home",
         brand: "Breville",
         isActive: true,
      },
      {
         id: 6,
         name: "Sunglasses",
         description: "Polarized UV protection sunglasses with titanium frame",
         price: 159,
         quantity: 5,
         image: "https://picsum.photos/seed/sunglasses/400/300",
         category: "Fashion",
         brand: "Ray-Ban",
         isActive: false,
      },
   ],
   selectedProduct: null,
   loading: false,
   error: null,
};

export { type Product, type ProductState, initialProductState };
