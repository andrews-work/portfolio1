import React from 'react';
import Link from 'next/link';
import { welcome } from '../../../../components/labels';

const WelcomeM = () => {
  return (
    <div className="flex w-full h-[10vh] border-b border-black ml-[2vh] ">
        <div>
          <Link href="/" className="no-underline">
            <h1 className="text-3xl text-black">{welcome.title}</h1>
          </Link>
      </div>
    </div>
  );
};


export default WelcomeM;
