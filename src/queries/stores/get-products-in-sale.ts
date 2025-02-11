import { bestSellersProductsMock } from "./products.mock";
import { ProductType } from "./products.types";

type FetchProductsInSaleProps = {
  storeId: string;
};

export async function getProductsInSale({
  storeId,
}: FetchProductsInSaleProps): Promise<ProductType[]> {
  console.info(`Fetching products in sale with storeId ${storeId}...`);
  return bestSellersProductsMock;
}
