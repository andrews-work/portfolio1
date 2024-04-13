"use client";

import React from 'react';
import DeviceSize from '../../../components/DeviceSize';
import DesktopStore from './layouts/desktopStore';
import MobileStore from './layouts/mobileStore';
import TabletStore from './layouts/tabletStore';

const StorePage: React.FC = () => {
  return (
    <DeviceSize>
      {(screenSize) => {
        if (screenSize === 'mobile') {
          return <MobileStore />;
        } else if (screenSize === 'tablet') {
          return <TabletStore />;
        } else {
          return <DesktopStore />;
        }
      }}
    </DeviceSize>
  );
};

export default StorePage;
