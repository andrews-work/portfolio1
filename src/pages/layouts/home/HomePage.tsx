"use client";

import React from 'react';
import DeviceSize from '@/components/DeviceSize';
import MobileHome from './layouts/mobileHome';
import TabletHome from './layouts/tabletHome';
import DesktopHome from './layouts/desktopHome';


const HomePage: React.FC = () => {
  return (
    <DeviceSize>
      {(screenSize) => {
        if (screenSize === 'mobile') {
          return <MobileHome />;
        } else if (screenSize === 'tablet') {
          return <TabletHome />;
        } else {
          return <DesktopHome />;
        }
      }}
    </DeviceSize>
  );
};

export default HomePage;
