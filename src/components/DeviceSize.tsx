import React, { useState, useEffect } from 'react';

interface DeviceSizeProps {
  children: (size: string) => React.ReactNode;
}

const DeviceSize: React.FC<DeviceSizeProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setScreenSize('mobile');
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1399) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Set initial screen size
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return children(screenSize);
};

export default DeviceSize;
