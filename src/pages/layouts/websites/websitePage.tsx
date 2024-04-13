"use client";

import React from 'react';
import DeviceSize from '../../../components/DeviceSize';
import DesktopWebsites from './layouts/desktopWebsite';
import MobileWebsites from './layouts/mobileWebsite';
import TabletWebsites from './layouts/tabletWebsite';

const WebsitesPage: React.FC = () => {
  return (
    <DeviceSize>
      {(screenSize) => {
        if (screenSize === 'mobile') {
          return <MobileWebsites />;
        } else if (screenSize === 'tablet') {
          return <TabletWebsites />;
        } else {
          return <DesktopWebsites />;
        }
      }}
    </DeviceSize>
  );
};

export default WebsitesPage;
