import { StoreInfoSkeleton } from "./_components/store-info";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="h-full bg-white rounded-t-[40px] p-4 flex flex-col gap-6">
      <StoreInfoSkeleton />
      <Skeleton className="w-full h-5" />
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="w-full h-48" />
        <Skeleton className="w-full h-48" />
      </div>
      <Skeleton className="w-full h-5" />
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-full h-32" />
        <Skeleton className="w-full h-32" />
      </div>
    </div>
  );
}
