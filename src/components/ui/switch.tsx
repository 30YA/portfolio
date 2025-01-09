'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

import SunIcon from '~/public/assets/svg/sun-icon.svg';
import MoonIcon from '~/public/assets/svg/moon-icon.svg';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    dir="rtl"
    className={cn(
      'dark:data-[state=checked]:bg-black-1100 peer relative inline-flex h-8 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200 dark:focus-visible:ring-gray-300 dark:focus-visible:ring-offset-gray-950 dark:data-[state=unchecked]:bg-gray-50',
      className
    )}
    {...props}
    ref={ref}
  >
    <SunIcon className="absolute left-1 z-10" />
    <MoonIcon className="absolute right-2 z-10" />
    <SwitchPrimitives.Thumb
      dir="rtl"
      className={cn(
        'pointer-events-none block h-7 w-7 !-translate-x-8 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:!translate-x-0 data-[state=unchecked]:translate-x-0'
      )}
    ></SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
