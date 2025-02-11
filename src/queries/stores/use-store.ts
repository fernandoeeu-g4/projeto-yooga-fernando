import { StatusType } from "@/app/stores/[id]/_components/store-info";
import { fakeRandomDelay } from "@/shared/helpers/async";

export type StoreType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  distance: string;
  deliveryTimeEstimate: string;
  minPrice: string;
  status: StatusType;
};

type FetchStoreProps = {
  storeId: string;
};

export const store: StoreType = {
  id: "1",
  name: "Vila do Açaí - Jardim da Penha",
  price: 100,
  image: "https://avatar.iran.liara.run/public/1",
  category: "Açaiteria",
  distance: "6,3 km",
  deliveryTimeEstimate: "Hoje, 80-90 min",
  minPrice: "Min. R$ 10,00",
  status: "open",
};

export async function getStore({ storeId }: FetchStoreProps) {
  await fakeRandomDelay();
  console.info(`Fetching store with id ${storeId}...`);
  return store;
}
