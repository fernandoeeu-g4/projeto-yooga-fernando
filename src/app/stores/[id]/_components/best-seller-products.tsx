import { Separator } from "@/components/ui/separator";
import { getBestSellersProducts } from "@/queries/stores/get-best-sellers-products";
import { Suspense } from "react";
import { BestSellerProductCard } from "./best-seller-product-card";
import { fakeRandomDelay } from "@/shared/helpers/async";

const BestSellersProductsSkeleton = () => (
  <div className="flex flex-col gap-3">
    <div className="text-primary text-xl font-bold w-32 h-6 bg-gray-200 rounded-md animate-pulse"></div>
    <div className="flex gap-4 flex-col">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <div className="h-24 w-full bg-gray-200 rounded-md animate-pulse"></div>
          {index < 2 ? <Separator /> : null}
        </div>
      ))}
    </div>
  </div>
);

export async function BestSellersProducts() {
  return (
    <Suspense fallback={<BestSellersProductsSkeleton />}>
      <BestSellersProductsContent />
    </Suspense>
  );
}

async function BestSellersProductsContent() {
  await fakeRandomDelay();
  const bestSellersProducts = await getBestSellersProducts({ storeId: "1" });
  return (
    <div className="flex flex-col gap-3 pb-10">
      <h2 className="text-primary text-xl font-bold">Melhores da casa</h2>
      <div className="flex gap-4 flex-col">
        {bestSellersProducts.map((product, index) => (
          <div className="flex flex-col gap-2" key={product.id}>
            <BestSellerProductCard key={product.id} product={product} />
            {index < bestSellersProducts.length - 1 ? <Separator /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
