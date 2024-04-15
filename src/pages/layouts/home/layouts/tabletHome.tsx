import React from 'react';
import WelcomeM from '../components/WelcomeM';
import InfoM from '../components/InfoM';

const MobileHome = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <WelcomeM />
      <InfoM />
    </div>
  );
};

export default MobileHome;
