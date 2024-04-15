import React from 'react';

const Display = () => {
  return (
    <div className="flex-col">
      {/* image */}
      <div className="h-[80vh] w-[75vw] flex items-center justify-center bg-[#f0f0f0] text-xl">
        <div className="group relative">
            <h1 className="text-xl text-black">Your Website Here</h1>
            <div className="absolute invisible group-hover:visible z-10 w-[8vw] text-black rounded shadow-md px-3 py-2 text-sm right-0 mt-2">
              <div>
                <p className="leading-normal">Contact Me </p>
              </div>
              <div className="absolute right-0 bottom-0 w-0 h-0 border-solid border-gray-900 border-t-0 border-r-0 border-b-2 border-l-2"></div>
            </div>
        </div>
      </div>
      {/* version */}
      <div className="h-[10vh] w-[75vw] border-t border-black flex items-center justify-center bg-[#e0e0e0] text-xl">
        <h1>Version 2.4.1</h1>
      </div>
    </div>
  );
}

export default Display;
