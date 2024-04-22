// ProcessM.tsx

import React from 'react';

interface ProcessMProps {
  process1: string;
  process2: string;
  process3: string;
  process4: string;
}

const ProcessM: React.FC<ProcessMProps> = ({ process1, process2, process3, process4 }) => {
  return (
    <div className="w-full mb-[2vh] flex-grow">
      <h1 className="text-3xl mb-[2vh]">Process</h1>
      <p className="text-xl">1. {process1}</p>
      <p className="text-xl">2. {process2}</p>
      <p className="text-xl">3. {process3}</p>
      <p className="text-xl">4. {process4}</p>
    </div>
  );
};

export default ProcessM;
