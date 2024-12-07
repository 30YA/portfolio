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
}

export default function LandingCard({
  children,
  heading,
  description,
  title,
  className,
}: Props): ReactElement {
  return (
    <Card className={`rounded-3xl ${className}`}>
      <CardHeader
        className={classNames('md:px-8 md:py-16', {
          'md:py-8': heading,
        })}
      >
        {(heading?.length ?? 0) > 0 && (
          <CardDescription className="text-base text-color-subtitle">
            {heading}
          </CardDescription>
        )}

        <CardTitle
          className={classNames('text-3xl font-semibold text-color-title', {
            'md:pt-5': heading,
            'md:pb-4': !heading,
          })}
        >
          {title}
        </CardTitle>

        {(description?.length ?? 0) > 0 && (
          <CardDescription
            className={classNames('text-2xl text-color-subtitle', {
              'md:pt-4': heading,
            })}
          >
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
