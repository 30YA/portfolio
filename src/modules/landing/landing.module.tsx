'use client';

import React, { useState, useEffect, type ReactElement } from 'react';

import DesktopVersion from './components/desktop-version';
import MobileVersion from './components/mobile-version';

export default function LandingModule(): ReactElement {
  const [screenSize, setScreenSize] = useState<number>(450);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    handleResize(); // Set the initial value

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{screenSize > 768 ? <DesktopVersion /> : <MobileVersion />}</>;
}
