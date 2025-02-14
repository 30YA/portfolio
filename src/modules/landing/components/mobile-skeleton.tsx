import React, { type ReactElement } from 'react';
import { Image as ImageIcon } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';

export default function MobileSkeleton(): ReactElement {
  return (
    <div className="mx-auto flex max-w-[450px] animate-enter flex-col gap-y-3 p-3 md:hidden">
      <Skeleton className="min-h-[200px] rounded-3xl" />
      <Skeleton className="min-h-[200px] rounded-3xl" />
      <Skeleton className="flex h-[244px] w-full items-center justify-center rounded-3xl">
        <ImageIcon
          strokeWidth={1.25}
          className="h-14 w-14 text-color-subtitle"
        />
      </Skeleton>
      <Skeleton className="flex h-[244px] w-full items-center justify-center rounded-3xl">
        <ImageIcon
          strokeWidth={1.25}
          className="h-14 w-14 text-color-subtitle"
        />
      </Skeleton>

      <div className="flex w-full gap-x-3">
        <Skeleton className="h-[184px] w-2/3 rounded-3xl" />
        <Skeleton className="h-[184px] w-1/3 rounded-3xl" />
      </div>

      <Skeleton className="h-[270px] w-full rounded-3xl" />
      <Skeleton className="h-[158px] w-full rounded-3xl" />

      <div className="flex w-full gap-x-2">
        <Skeleton className="flex h-16 w-full items-center justify-center rounded-xl" />
        <Skeleton className="flex h-16 w-full items-center justify-center rounded-xl" />
        <Skeleton className="flex h-16 w-full items-center justify-center rounded-xl" />
        <Skeleton className="flex h-16 w-full items-center justify-center rounded-xl" />
        <Skeleton className="flex h-16 w-full items-center justify-center rounded-xl" />
      </div>
    </div>
  );
}
