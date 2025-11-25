import { HttpClientInstance } from "@/services/http-client.service";
import { ProductDto } from "../dto/product.dto";

export class ProductRepository {
  async getProducts(params?: any): Promise<{ data: { products: ProductDto[] } }> {
    const response = await HttpClientInstance.get<{ products: ProductDto[] }>(
      "products",
      { params }
    );
    return response;
  }
}
