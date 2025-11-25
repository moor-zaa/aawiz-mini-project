"use client";

import Card from "@/components/card/card.component";
import useProducts from "./hooks/useProducts";
import Icon from "@/components/icon/icon.component";
import ProductCard from "./components/product-card/product-card.component";
import { Button } from "@/components/button/button.component";

const Products = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <div>Loading Products ...</div>;

  return (
    <div className="w-full">
      <h2 className="text-xl mb-4">Products</h2>

      <Card className="p-4">
        <div className="grid grid-cols-1 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Button size="sm" variant="outline" className="text-xs">
            View More <Icon iconName="arrow_forward" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Products;