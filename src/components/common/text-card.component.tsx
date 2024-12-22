import React, { type ReactNode, type ReactElement } from 'react';
import classNames from 'classnames';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

interface Props {
  heading?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  headingClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function TextCard({
  children,
  heading,
  description,
  title,
  className,
  descriptionClassName,
  headingClassName,
  titleClassName,
}: Props): ReactElement {
  return (
    <Card className={`rounded-3xl ${className}`}>
      <CardHeader className="gap-y-0 lg:p-8">
        {(heading?.length ?? 0) > 0 && (
          <CardDescription
            className={classNames(
              'text-base text-color-subtitle',
              headingClassName
            )}
          >
            {heading}
          </CardDescription>
        )}

        <CardTitle
          className={classNames(
            'pt-6 text-3xl font-semibold text-color-title',
            titleClassName
          )}
        >
          {title}
        </CardTitle>

        {(description?.length ?? 0) > 0 && (
          <CardDescription
            className={classNames(
              'pt-5 text-2xl text-color-subtitle',
              descriptionClassName
            )}
          >
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
