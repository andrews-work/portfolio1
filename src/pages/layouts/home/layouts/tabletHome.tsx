import React from 'react';
import Welcome from '../components/Welcome';
import InfoM from '../components/InfoM';

const MobileHome = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Welcome />
      <InfoM />
    </div>
  );
};

export default MobileHome;
