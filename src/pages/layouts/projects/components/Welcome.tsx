import React from 'react';
import Link from 'next/link';

interface projectProps {
  title: string;
  menu: string;
}

const Welcome: React.FC<projectProps> = ({ title, menu }) => {
  return (
      <div className="h-[10vw] w-full flex justify-center items-center">
          <div className="ml-[5vw]">
            <Link href="/projects" className="no-underline hover:underline">
              <h1 className="text-3xl text-black mt-0">{title}</h1>
            </Link>
          </div>
          <div>
            <h1>{menu}</h1>
          </div>
      </div>
  );
};

export default Welcome;
        