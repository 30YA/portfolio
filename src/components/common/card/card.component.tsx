import classNames from 'classnames';
import React, { type ReactNode } from 'react';
interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  header?: string;
  headerClassName?: string;
}

export default function CardComponent({
  children,
  className,
  header,
  headerClassName,
  title,
  titleClassName,
}: CardProps) {
  return (
    <div
      className={`h-fit rounded-[32px] border border-color-stroke bg-color-card p-8 text-color-title ${className || ''}`}
    >
      {header && (
        <h1
          className={classNames(
            'mb-6 border-b border-color-stroke pb-6 text-[32px] font-semibold text-color-title',
            headerClassName
          )}
        >
          {header}
        </h1>
      )}
      {title && (
        <h3
          className={classNames(
            'mb-6 text-base font-normal text-color-subtitle',
            // { 'mt-[6px]': !header },
            titleClassName
          )}
        >
          {title.toLocaleUpperCase()}
        </h3>
      )}
      {children}
    </div>
  );
}
