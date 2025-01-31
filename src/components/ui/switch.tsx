'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

import SunIcon from '~/public/assets/svg/sun-icon.svg';
import MoonIcon from '~/public/assets/svg/moon-icon.svg';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  return (
    <SwitchPrimitives.Root
      dir="rtl"
      className={cn(
        'peer relative inline-flex h-12 w-20 shrink-0 cursor-pointer items-center rounded-full border-2 border-color-stroke bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
      ref={ref}
    >
      <SunIcon
        className={cn(
          'absolute left-[12px] z-10',
          theme === 'dark' ? 'hidden' : 'block'
        )}
      />
      <MoonIcon
        className={cn(
          'absolute right-[11px] z-10',
          theme === 'light' ? 'hidden' : 'block'
        )}
      />
      <SwitchPrimitives.Thumb
        dir="rtl"
        className={cn(
          'pointer-events-none block h-9 w-9 !-translate-x-9 rounded-full bg-[#1f1f1f] shadow-lg ring-0 transition-transform data-[state=checked]:!-translate-x-1 data-[state=unchecked]:translate-x-0'
        )}
      ></SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
