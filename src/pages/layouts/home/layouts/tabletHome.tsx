import React from 'react';
import Welcome from '../components/Welcome';
import InfoM from '../components/InfoM';

const TabletHome = () => {
  return (
    <div className="flex-col">
      <Welcome />
      <InfoM />
    </div>
  );
};

export default TabletHome;
