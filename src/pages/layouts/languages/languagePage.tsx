"use client";

import React from 'react';
import DeviceSize from '../../../components/DeviceSize';
import DesktopLanguage from './layouts/desktopLanguage';
import MobileLanguage from './layouts/mobileLanguage';
import TabletLanguage from './layouts/tabletLanguage';

const LanguagePage: React.FC = () => {
  return (
    <DeviceSize>
      {(screenSize) => {
        if (screenSize === 'mobile') {
          return <MobileLanguage />;
        } else if (screenSize === 'tablet') {
          return <TabletLanguage />;
        } else {
          return <DesktopLanguage />;
        }
      }}
    </DeviceSize>
  );
};

export default LanguagePage;
