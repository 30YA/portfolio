import classNames from 'classnames';
import React from 'react';

interface Props {
  className?: string;
  title: string;
  titleClassName?: string;
  detail: string;
  detailClassName?: string;
}

function LineWithTitles({
  className,
  title,
  titleClassName,
  detail,
  detailClassName,
}: Props) {
  return (
    <div
      className={classNames(
        'my-4 flex items-center gap-4 xl-max:flex-col xl-max:gap-1',
        className
      )}
    >
      <p
        className={classNames(
          'shrink truncate text-xl font-normal text-color-title xl-max:w-full',
          titleClassName
        )}
      >
        {title}
      </p>
      <div className="h-[1px] grow bg-color-stroke xl-max:hidden"></div>
      <p
        className={classNames(
          'shrink-0 truncate text-xl font-normal text-color-title xl-max:w-full xl-max:text-color-subtitle',
          detailClassName
        )}
      >
        {detail}
      </p>
    </div>
  );
}

export default LineWithTitles;
