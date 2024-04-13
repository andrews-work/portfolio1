import React from 'react';
import Link from 'next/link';

interface projectProps {
  title: string;
  menu: string;
}

const Welcome: React.FC<projectProps> = ({ title, menu }) => {
  return (
    <div className="flex w-full h-[10vh] bg-white border-b border-black items-center justify-center px-8">
      <div className="w-[93vw] flex justify-between">
        <div>
          <Link href="/projects" className="no-underline">
            <h1 className="text-3xl text-black">{title}</h1>
          </Link>
        </div>
        <div>
          <h1 className="text-3xl text-black">{menu}</h1>
        </div>
      </div>
    </div>
  );
};


export default Welcome;
