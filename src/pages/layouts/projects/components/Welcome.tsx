import React from 'react';
import Link from 'next/link';

interface projectProps {
  title: string;
  menu: string;
}

const Welcome: React.FC<projectProps> = ({ title, menu }) => {
  return (
    <div>
      <div className="bg-black">
        <div>
          <Link href="/projects" className="no-underline hover:underline">
            <h1 className="text-3xl text-black">{title}</h1>
          </Link>
        </div>
        <div>
          <h1>{menu}</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
        