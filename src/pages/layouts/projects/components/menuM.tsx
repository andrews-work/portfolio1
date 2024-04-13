import React from 'react';
import Aim from './Aim';
import Complete from './Complete';
import Development from './Development';
import Idea from './Idea';

const MenuM = () => {
  return (
    <div className="w-[95vw] h-full flex flex-col items-center center">
      <div className="mt-[10vh] w-full h-[20vw] flex items-center ml-[15vw]">
        <Aim />
      </div>
      <div className="w-full h-[60vw] flex items-center ml-[15vw]">
        <Complete />
      </div>
      <div className="w-full h-[10vh] flex items-center ml-[15vw]">
        <Development />
      </div>
      <div className="w-full h-[20vh] flex items-center ml-[15vw]">
        <Idea />
      </div>
    </div>
  );
};

export default MenuM;
