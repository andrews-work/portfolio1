import React from 'react';

interface InfoProps {
  aim1: string;
  aim2: string;
  aim3: string;
  process1: string;
  process2: string;
  process3: string;
  process4: string;
  code: string;
}

const Info: React.FC<InfoProps> = ({ aim1, aim2, aim3, process1, process2, process3, process4, code }) => {
  return (
    <div className="h-[90vh] w-[25vw] border-r border-black flex flex-col">
      <div className="w-full p-4">
        <div className="h-[30vh] flex flex-col justify-center">
          <div className="ml-[3vw]">
            <h1 className="font-bold text-black text-5xl mb-[1vh]">Aims</h1>
            <div className="flex">
              <h4 className="text-3xl">1. </h4>
              <p className="text-3xl ml-[1vw]">{aim1}</p>
            </div>
            <div className="flex">
              <h4 className="text-3xl">2. </h4>
              <p className="text-3xl ml-[1vw]">{aim2}</p>
            </div>
            <div className="flex">
              <h4 className="text-3xl">3. </h4>
              <p className="text-3xl ml-[1vw]">{aim3}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="h-[30vh] flex flex-col justify-center">
          <div className="ml-[3vw]">
            <h1 className="font-bold text-black text-5xl mb-[1vh]">Process</h1>
            <div className="flex">
              <h4 className="text-3xl">1. </h4>
              <p className="text-3xl ml-[1vw]">{process1}</p>
            </div>
            <div className="flex">
              <h4 className="text-3xl">2. </h4>
              <p className="text-3xl ml-[1vw]">{process2}</p>
            </div>
            <div className="flex">
              <h4 className="text-3xl">3. </h4>
              <p className="text-3xl ml-[1vw]">{process3}</p>
            </div>
            <div className="flex">
              <h4 className="text-3xl">4. </h4>
              <p className="text-3xl ml-[1vw]">{process4}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="h-[25vh] flex flex-col justify-center">
          <div className="ml-[3vw]">
            <h1 className="font-bold text-black text-5xl mb-[1vh]">Code</h1>
            <a href={code} target="_blank" rel="noopener noreferrer">
              <p className="text-3xl">{code}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
