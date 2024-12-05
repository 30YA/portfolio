'use client';
import React from 'react';

import Grid from '@/components/common/grid.component';

export default function Home() {
  return (
    <div className="p-8">
      <Grid cols={12} className="h-auto w-full">
        <div className="col-span-9 h-auto w-full">
          <Grid cols={4} className="mt-4 h-[268px]">
            <div className="col-span-2 bg-red-200">2/4</div>
            <div className="col-span-1 bg-red-100">1/4</div>
            <div className="col-span-1 bg-red-300">1/4</div>
          </Grid>

          <Grid cols={12} className="mt-4 h-[268px] w-full">
            <div className="col-span-2 bg-slate-200">2/12</div>
            <div className="col-span-6 bg-slate-300">6/12</div>
            <div className="col-span-4 bg-slate-400">4/12</div>
          </Grid>

          <Grid cols={12} className="mt-4 h-[268px] w-full">
            <div className="col-span-5 bg-blue-300">5/12</div>
            <div className="col-span-4 bg-blue-400">4/12</div>
            <div className="col-span-3 bg-blue-500">3/12</div>
          </Grid>
        </div>

        <div className="col-span-3">Sidebar</div>
      </Grid>
    </div>
  );
}
