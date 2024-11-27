'use client';
import React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div className="p-5">
      <div className="m-5">siavash</div>

      <div className="m-5 flex gap-2">
        <Button onClick={() => setTheme('dark')}>dark</Button>
        <Button onClick={() => setTheme('light')}>light</Button>
        <Button onClick={() => setTheme('system')}>system</Button>
      </div>
      <div className="m-5">
        <Input className="w-44" />
      </div>
    </div>
  );
}
