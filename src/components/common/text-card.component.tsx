import React, { type ReactNode, type ReactElement } from 'react';

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

export default function TextCard({
  children,
  heading,
  description,
  title,
  className,
}: Props): ReactElement {
  return (
    <Card className={`rounded-3xl ${className}`}>
      <CardHeader className="gap-y-0 lg:p-8">
        {(heading?.length ?? 0) > 0 && (
          <CardDescription className="text-base text-color-subtitle">
            {heading}
          </CardDescription>
        )}

        <CardTitle className="pt-6 text-3xl font-semibold text-color-title">
          {title}
        </CardTitle>

        {(description?.length ?? 0) > 0 && (
          <CardDescription className="pt-5 text-2xl text-color-subtitle">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
