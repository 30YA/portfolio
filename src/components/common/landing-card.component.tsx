import React, { type ReactNode, type ReactElement } from 'react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

interface Props {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function LandingCard({
  children,
  description,
  title,
  className,
}: Props): ReactElement {
  return (
    <Card className={`rounded-3xl ${className}`}>
      <CardHeader className="md:gap-y-6 md:px-10 md:py-16">
        <CardTitle className="text-3xl font-semibold text-color-title">
          {title}
        </CardTitle>

        {(description?.length ?? 0) > 0 && (
          <CardDescription className="text-2xl text-color-subtitle">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
