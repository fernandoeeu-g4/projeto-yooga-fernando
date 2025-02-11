import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { getProductsInSale } from "@/queries/stores/get-products-in-sale";
import { Suspense } from "react";
import { ProductInSaleCard } from "./product-in-sale-card";
import { fakeRandomDelay } from "@/shared/helpers/async";

const OfferProductsSkeleton = () => (
  <section className=" flex flex-col gap-3">
    <div className="text-primary text-xl font-bold w-48 h-6 bg-gray-200 rounded-md animate-pulse"></div>
    <Carousel
      opts={{
        dragFree: true,
      }}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 flex flex-col gap-3">
            <div className="h-32 w-full bg-gray-200 rounded-md animate-pulse"></div>
            {index > 1 ? <Separator /> : null}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </section>
);

export async function OfferProducts() {
  return (
    <Suspense fallback={<OfferProductsSkeleton />}>
      <OfferProductsContent />
    </Suspense>
  );
}

async function OfferProductsContent() {
  await fakeRandomDelay();
  const productsInSale = await getProductsInSale({ storeId: "1" });

  return (
    <section className=" flex flex-col gap-3">
      <h2 className="text-primary text-xl font-bold">Produtos em oferta 💙</h2>
      <Carousel>
        <CarouselContent>
          {productsInSale.map((product, index) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 flex flex-col gap-3"
            >
              <ProductInSaleCard product={product} />
              {index > productsInSale.length - 1 ? <Separator /> : null}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
