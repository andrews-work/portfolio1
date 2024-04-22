// AimM.tsx

import React from 'react';

interface AimMProps {
  aim1: string;
  aim2: string;
  aim3: string;
}

const AimM: React.FC<AimMProps> = ({ aim1, aim2, aim3 }) => {
  return (
    <div className="w-full h-[50vh] mb-[2vh] flex-grow">
      <h1 className="text-3xl mb-[2vh]">Aim</h1>
      <p className="text-xl">1. {aim1}</p>
      <p className="text-xl">2. {aim2}</p>
      <p className="text-xl">3. {aim3}</p>
    </div>
  );
};

export default AimM;
