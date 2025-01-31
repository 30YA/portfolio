import React from 'react';
import { type Metadata } from 'next';

import Routing from './components/routing.component';

export const metadata: Metadata = {
  title: 'portfolio',
  description: '...',
};

function Index() {
  return <Routing />;
}

export default Index;
