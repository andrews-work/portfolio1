import React from 'react';
import Link from 'next/link';
import { welcome } from '../../../../components/labels';

const Welcome = () => {
  return (
    <div className="flex w-full h-[10vh] border-b border-black items-center justify-center px-8">
      <div className="w-[90vw] flex justify-between">
        <div>
          <Link href="/" className="no-underline">
            <h1 className="text-3xl text-black">{welcome.title}</h1>
          </Link>
        </div>
        <div className="group relative">
          <h1 className="text-3xl text-black">{welcome.menu}</h1>
          <div className="absolute invisible group-hover:visible z-10 w-[20vw] text-black rounded shadow-md px-3 py-2 text-sm right-0 mt-2">
            <div>
              <p className="leading-normal">Functionality coming soon</p>
            </div>
            <div className="absolute right-0 bottom-0 w-0 h-0 border-solid border-gray-900 border-t-0 border-r-0 border-b-2 border-l-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Welcome;
