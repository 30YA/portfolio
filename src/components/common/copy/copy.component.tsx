import React, { type ReactElement, type ReactNode, useRef } from 'react';
import { RiFileCopyLine } from 'react-icons/ri';
import classNames from 'classnames';

import { useToast } from '@/hooks/use-toast';

export interface CopyProps {
  children: string | ReactNode;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  icon?: ReactElement;
  toastMessage?: string;
  textShouldBeCopied: string;
}

export default function Copy({
  children,
  className,
  iconClassName,
  textClassName,
  icon,
  toastMessage = 'email copied to clipboard',
  textShouldBeCopied,
}: CopyProps): ReactElement {
  const { toast } = useToast();
  const urlRef = useRef<HTMLDivElement>(null);

  const handleCopyToClipboard = (): void => {
    if (urlRef.current) {
      navigator.clipboard.writeText(textShouldBeCopied);
      toast({
        variant: 'default',
        title: toastMessage,
        duration: 3000,
      });
    }
  };

  return (
    <div
      ref={urlRef}
      className={classNames(
        'bg-silver-100 relative flex h-12 items-center justify-center gap-2 rounded-md',
        className
      )}
      onClick={handleCopyToClipboard}
    >
      <p
        className={classNames(
          'text-secondary-400 text-xs font-medium',
          textClassName
        )}
      >
        {children}
      </p>
      <div className="flex items-center justify-center">
        {icon ?? (
          <RiFileCopyLine
            className={classNames(
              'h-5 w-5 text-gray-500 hover:cursor-pointer hover:text-gray-600',
              iconClassName
            )}
          />
        )}
      </div>
    </div>
  );
}
