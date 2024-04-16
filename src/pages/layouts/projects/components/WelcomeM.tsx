// WelcomeM.tsx

import React from 'react';
import Link from 'next/link';

interface WelcomeMProps {
  title: string;
}

const WelcomeM: React.FC<WelcomeMProps> = ({ title }) => {
  return (
    <div className="flex w-full h-[10vh] border-b border-black items-center">
      <div className="ml-[2vh]">
        <Link href="/projects" className="no-underline">
          <h1 className="text-3xl text-black">{title}</h1>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeM;
