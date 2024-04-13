import React from 'react';
import Image from 'next/image';

interface DisplayProps {
  image: string;
  version: string;
}

const Display: React.FC<DisplayProps> = ({ image, version }) => {
  return (
    <div className="flex flex-col">
      <div className="h-[80vh] w-[75vw] relative">
        <Image src={image} alt="Project" layout="fill" objectFit="contain" />
      </div>
      <div className="h-[10vh] w-[75vw] border-t border-black flex items-center justify-center text-xl">
        <p>{version}</p>
      </div>
    </div>
  );
};

export default Display;
