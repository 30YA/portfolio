import React, { type ReactElement } from 'react';

import AboutModule, { AboutMetaData } from '@/modules/about';

export const metadata = AboutMetaData;

export default function About(): ReactElement {
  return <AboutModule />;
}
