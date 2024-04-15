import React from 'react';
import Welcome from '../components/Welcome';
import InfoT from '../components/InfoT';

const MobileHome = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Welcome />
      <InfoT />
    </div>
  );
};

export default MobileHome;
