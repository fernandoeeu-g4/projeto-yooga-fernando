import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { StoreType } from "@/queries/stores/use-store";
import { Gift } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export type StatusType = "open" | "closed";

const statusMapper: Record<StatusType, { label: string; color: string }> = {
  open: {
    label: "Aberto",
    color: "text-success",
  },
  closed: {
    label: "Fechado",
    color: "text-error",
  },
};

const deliveryOptions = [
  {
    label: "Pronta Entrega",
    value: "fast-delivery",
  },
  {
    label: "Retirada",
    value: "pickup",
  },
  {
    label: "Entrega agendada",
    value: "schedule",
  },
];

function Status({ status }: { status: StatusType }) {
  return (
    <span
      className={`${statusMapper[status].color} py-1 rounded-full text-sm font-semibold`}
    >
      {statusMapper[status].label}
    </span>
  );
}

export const StoreInfo = ({ store }: { store: StoreType }) => {
  const {
    image,
    name,
    category,
    distance,
    minPrice,
    deliveryTimeEstimate,
    status,
  } = store;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="h-15 min-h-15 w-15 min-w-15 rounded-lg"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold text-primary">{name}</h1>
          <div className="text-secondary flex items-center gap-1 text-sm font-semibold">
            <span>{category}</span>
            <span>•</span>
            <span>{distance}</span>
            <span>•</span>
            <span>{minPrice}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Select defaultValue={deliveryOptions[0].value}>
          <SelectTrigger className="w-max">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {deliveryOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex items-center gap-1 font-semibold text-sm text-secondary ">
          <span>{deliveryTimeEstimate}</span>
          <span>•</span>
          <Status status={status} />
        </div>
      </div>
      <div className="flex py-2 items-center gap-2 rounded-full bg-sky-100 text-sky-800 justify-center">
        <Gift className="size-4" />
        <span className="font-semibold text-sm">
          Fidelidade: peça 5 vezes, ganhe R$ 30
        </span>
      </div>
    </div>
  );
};

export const StoreInfoSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <Skeleton className="h-15 min-h-15 w-15 min-w-15 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-48" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-2" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-2" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-32" />
        <div className="flex items-center gap-1">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-2" />
          <Skeleton className="h-4 w-8" />
        </div>
      </div>
      <Skeleton className="h-8 rounded-full w-full" />
    </div>
  );
};
