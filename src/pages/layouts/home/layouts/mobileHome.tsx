import React from 'react';
import WelcomeM from '../components/WelcomeM';
import InfoM from '../components/InfoM';

const MobileHome = () => {
  return (
    <div className="flex-col">
      <WelcomeM />
      <InfoM />
    </div>
  );
};

export default MobileHome;
