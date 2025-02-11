import { bestSellersProductsMock } from "./products.mock";

type FetchBestSellersProductsProps = {
  storeId: string;
};

export async function getBestSellersProducts({
  storeId,
}: FetchBestSellersProductsProps) {
  console.info(`Fetching best sellers products for store ${storeId}...`);
  return bestSellersProductsMock;
}
