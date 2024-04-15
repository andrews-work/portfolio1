import React from 'react';
import WelcomeT from '../components/WelcomeT';
import InfoT from '../components/InfoT';

const MobileHome = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <WelcomeT />
      <InfoT />
    </div>
  );
};

export default MobileHome;
