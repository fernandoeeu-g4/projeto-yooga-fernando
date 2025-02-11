import type { StaticImageData } from "next/image";

export type ProductType = {
  id: string;
  name: string;
  priceLabel: string | null;
  discountedPriceLabel: string | null;
  image: StaticImageData;
  description: string;
  discountTagLabel: string | null;
};
