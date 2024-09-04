import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[300px] md:w-[780px] " />
        <Skeleton className="h-4  w-[300px] md:w-[780px]" />
        <Skeleton className="h-4  w-[300px] md:w-[780px]" />
        <Skeleton className="h-4  w-[300px] md:w-[780px]" />
      </div>
    </div>
  )
}
