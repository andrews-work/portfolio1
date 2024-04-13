import React from 'react';

const Display = () => {
  return (
    <div className="flex flex-col">
      {/* image */}
      <div className="h-[80vh] w-[75vw] flex items-center justify-center bg-[#f0f0f0] text-xl">
        <h1>Your Website Here</h1>
      </div>
      {/* version */}
      <div className="h-[10vh] w-[75vw] border-t border-black flex items-center justify-center bg-[#e0e0e0] text-xl">
        <h1>Version 2.4.1</h1>
      </div>
    </div>
  );
}

export default Display;
