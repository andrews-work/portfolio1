import React from 'react';
import Welcome from '@/pages/layouts/home/components/Welcome';
import Info from '@/pages/layouts/home/components/Info';
import Display from '@/pages/layouts/home/components/Display';

const DesktopHome = () => {
  return (
    <div className="h-screen w-screen">
      <div className="bg-[#f9f9f9]">
        <Welcome />
      </div>
      <div className="flex">
        <div className="bg-[#f5f5f5]">
          <Info />
        </div>
        <Display />
      </div>
    </div>
  );
}

export default DesktopHome;
