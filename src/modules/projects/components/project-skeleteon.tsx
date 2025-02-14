import React from 'react';
import { Image } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';

function ProjectSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full gap-4 md-max:flex-col">
        <Skeleton className="!h-[568px] w-1/3 rounded-[32px] md-max:w-full" />
        <Skeleton className="!h-[568px] w-2/3 rounded-[32px] md-max:w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="flex h-[650px] w-full items-center justify-center rounded-[32px]">
          <Image strokeWidth={1.25} className="h-14 w-14 text-color-subtitle" />
        </Skeleton>
        <Skeleton className="flex h-[764px] w-full items-center justify-center rounded-[32px]">
          <Image strokeWidth={1.25} className="h-14 w-14 text-color-subtitle" />
        </Skeleton>
        <Skeleton className="flex h-[764px] w-full items-center justify-center rounded-[32px]">
          <Image strokeWidth={1.25} className="h-14 w-14 text-color-subtitle" />
        </Skeleton>
        <Skeleton className="flex h-[764px] w-full items-center justify-center rounded-[32px]">
          <Image strokeWidth={1.25} className="h-14 w-14 text-color-subtitle" />
        </Skeleton>
      </div>
    </div>
  );
}

export default ProjectSkeleton;
