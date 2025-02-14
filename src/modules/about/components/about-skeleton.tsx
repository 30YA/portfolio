'use client';
import React from 'react';
import { type Metadata } from 'next';

import { Skeleton } from '@/components/ui/skeleton';

export const metadata: Metadata = {
  title: 'about',
  description: 'about-me',
};

function AboutSkeleton() {
  return (
    <div className="flex gap-4 md-max:flex-col">
      <div className="flex w-[calc(50%_-_8px)] flex-grow flex-col gap-4 md-max:w-full">
        <Skeleton className="h-[432px] rounded-[32px]" />
        <Skeleton className="h-[248px] rounded-[32px]" />
      </div>
      <div className="flex w-[calc(50%_-_8px)] flex-grow flex-col gap-4 md-max:w-full">
        <Skeleton className="h-[192px] rounded-[32px]" />
        <Skeleton className="h-[488px] rounded-[32px]" />
      </div>
    </div>
  );
}

export default AboutSkeleton;
