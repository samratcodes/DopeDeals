import { createContext, useContext } from "react";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  rating: number;
  brand: string;
}

interface DataContextType {
  cart: Product[];
  loading: boolean;
  results: Product[] | { products: Product[] };
  error: string;
  deleteCart: (todo: Product) => void;
  addCart: (todo: Product) => void;
  addBuynow: (todo: Product) => void;
}

// Create a default context value with placeholder functions
export const DataContext = createContext<DataContextType>({
  cart: [],
  loading: true,
  results: [],
  error: "",
  deleteCart: () => {}, // Placeholder, implement this function in provider
  addCart: () => {}, // Placeholder, implement this function in provider
  addBuynow: () => {}, // Placeholder, implement this function in provider
});

// Custom hook to use the DataContext
export const useData = (): DataContextType => useContext(DataContext);

// Export the DataProvider
export const DataProvider = DataContext.Provider;
