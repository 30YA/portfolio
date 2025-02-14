import React, { type ReactElement } from 'react';
import { Image } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';

export default function DesktopSkeleton(): ReactElement {
  return (
    <div className="flex w-full items-center justify-center p-4 md-max:hidden lg-max:overflow-scroll">
      <div className="flex h-full min-h-[calc(100vh-95px)] w-full gap-x-4 xl-max:flex-col">
        <div className="flex w-full flex-col gap-y-4 lg-max:flex">
          <div className="flex h-1/3 min-h-[268px] w-full grow gap-4">
            <Skeleton className="flex-grow-[2] basis-1/2 rounded-3xl p-14" />
            <Skeleton className="relative flex w-[260px] items-center justify-center rounded-3xl">
              <Image
                strokeWidth={1.25}
                className="h-14 w-14 text-color-subtitle"
              />
            </Skeleton>
            <Skeleton className="relative flex w-[260px] items-center justify-center rounded-3xl">
              <Image
                strokeWidth={1.25}
                className="h-14 w-14 text-color-subtitle"
              />
            </Skeleton>
          </div>

          <div className="flex w-full grow gap-4">
            <Skeleton className="relative flex w-[25%] grow items-center justify-center rounded-3xl">
              <Image
                strokeWidth={1.25}
                className="h-14 w-14 text-color-subtitle"
              />
            </Skeleton>
            <Skeleton className="h-full min-h-[268px] w-[50%] flex-grow rounded-3xl md:basis-[calc(100%/4.5*2)]" />

            <Skeleton className="relative flex w-[25%] grow items-center justify-center rounded-3xl">
              <Image
                strokeWidth={1.25}
                className="h-14 w-14 text-color-subtitle"
              />
            </Skeleton>
          </div>

          <div className="flex min-h-[274px] w-full grow gap-4">
            <Skeleton className="!h-auto w-[40%] rounded-3xl" />
            <Skeleton className="w-[40%] flex-grow-[2] rounded-3xl" />
            <Skeleton className="w-[20%] shrink-0 flex-grow-[2] rounded-3xl" />
          </div>
        </div>

        <div className="flex w-[360px] flex-col gap-y-4 xl-max:mt-4 xl-max:w-full xl-max:flex-row xl-max:gap-x-4">
          <div className="flex flex-col gap-4 xl-max:justify-around xl-max:gap-0">
            <div className="flex justify-between gap-4">
              <Skeleton className="h-20 w-20 grow items-center justify-center rounded-3xl" />
              <Skeleton className="h-20 w-20 grow items-center justify-center rounded-3xl" />
              <Skeleton className="h-20 w-20 grow items-center justify-center rounded-3xl" />
            </div>

            <div className="flex justify-between gap-4">
              <Skeleton className="h-20 w-20 grow items-center justify-center rounded-3xl" />
              <Skeleton className="h-20 w-20 grow items-center justify-center rounded-3xl" />
              <Skeleton className="h-20 w-20 grow items-center justify-center rounded-3xl" />
            </div>
          </div>

          <Skeleton className="flex h-[360px] w-full grow items-center justify-center overflow-hidden rounded-[32px] xl-max:h-[255px] xl-max:w-[380px]">
            <Image
              strokeWidth={1.25}
              className="h-14 w-14 text-color-subtitle"
            />
          </Skeleton>

          <Skeleton className="flex shrink-0 grow rounded-[32px]" />
        </div>
      </div>
    </div>
  );
}
