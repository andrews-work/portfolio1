import React from 'react';
import WelcomeM from '../components/WelcomeM';
import InfoT from '../components/InfoT';

const MobileHome = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <WelcomeM />
      <InfoT />
    </div>
  );
};

export default MobileHome;
