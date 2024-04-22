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
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">Aims</h1>
            <div className="">
              <h4 className="">1. </h4>
              <p className="">{aim1}</p>
            </div>
            <div className="">
              <h4 className="">2. </h4>
              <p className="">{aim2}</p>
            </div>
            <div className="">
              <h4 className="">3. </h4>
              <p className="">{aim3}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">Process</h1>
            <div className="">
              <h4 className="">1. </h4>
              <p className="">{process1}</p>
            </div>
            <div className="">
              <h4 className="">2. </h4>
              <p className="">{process2}</p>
            </div>
            <div className="">
              <h4 className="">3. </h4>
              <p className="">{process3}</p>
            </div>
            <div className="">
              <h4 className="">4. </h4>
              <p className="">{process4}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">Code</h1>
            <a href={code} target="_blank" rel="noopener noreferrer">
              <p className="text-xl">{code}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;