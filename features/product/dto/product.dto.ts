export interface ProductDto {
  id: number;
  title: string;
  description: string;
  category: "beauty" | "fragrances" | "furniture";
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  weight: number;
  images: string[];
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
}
