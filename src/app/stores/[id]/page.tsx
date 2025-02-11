"use cache";

import { Separator } from "@/components/ui/separator";
import { getStore } from "@/queries/stores/use-store";
import { BestSellersProducts } from "./_components/best-seller-products";
import { OfferProducts } from "./_components/offer-products";
import { StoreInfo } from "./_components/store-info";

export default async function StorePage() {
  const store = await getStore({ storeId: "1" });

  return (
    <div className="h-full bg-white rounded-t-[40px] p-4 flex flex-col gap-6">
      <StoreInfo store={store} />
      <Separator />
      <OfferProducts />
      <Separator />
      <BestSellersProducts />
      <Separator />
      <div className="pb-10">
        <BestSellersProducts />
      </div>
    </div>
  );
}
