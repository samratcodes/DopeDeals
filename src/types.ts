export interface Product {
  id: number;
  title: string;
  description: string;
  rating: number;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  brand: string; // Include the `brand` property here
}
