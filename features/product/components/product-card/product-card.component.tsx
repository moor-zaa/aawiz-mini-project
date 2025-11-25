import { FC, ReactNode } from "react";
import { ProductDto } from "../../dto/product.dto";
import Card from "@/components/card/card.component";
import Image from "next/image";
import Icon from "@/components/icon/icon.component";

interface ProductCardProps {
  product: ProductDto;
}

const StatItem: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-1">{children}</div>
);

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  if (!product) return <div>Loading Product ....</div>;

  return (
    <Card className="flex flex-col sm:flex-row gap-4 p-4">
      <div className="flex items-center justify-center shrink-0 sm:w-32">
        <Image
          src={product.images[0]}
          width={150}
          height={150}
          alt={product.title}
          className="object-contain w-full h-auto max-w-[150px]"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-md">{product.title}</p>
        <p className="text-xs opacity-70 mt-1 line-clamp-2">{product.description}</p>
        <div className="text-xs flex flex-wrap items-center gap-2 sm:gap-3 mt-4">
          <StatItem>
            <Icon iconName="policy" /> {product.returnPolicy}
          </StatItem>
          <StatItem>
            <Icon iconName="currency_pound" /> {product.price}
          </StatItem>
          <StatItem>
            <Icon iconName="kid_star" /> {product.rating}
          </StatItem>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;