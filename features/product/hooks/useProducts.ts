import { useEffect, useState } from "react";
import { ProductDto } from "../dto/product.dto";
import { ProductRepository } from "../api/product.api";

const useProducts = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const productService = new ProductRepository();

  useEffect(() => {
    productService
      .getProducts({ limit: 4 })
      .then((res) => {
        setProducts(res.data.products as ProductDto[]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading };
};

export default useProducts;
