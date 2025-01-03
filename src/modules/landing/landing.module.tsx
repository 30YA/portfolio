'use client';

import React, { type ReactElement } from 'react';

import DesktopVersion from './components/desktop-version';
import MobileVersion from './components/mobile-version';

export default function LandingModule(): ReactElement {
  return (
    <>
      <DesktopVersion />
      <MobileVersion />
    </>
  );
}
