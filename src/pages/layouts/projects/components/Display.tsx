import React from 'react';
import Image from 'next/image';

interface DisplayProps {
  image: string;
  version: string;
}

const Display: React.FC<DisplayProps> = ({ image, version }) => {
  return (
    <div className="flex-col h-full w-[full] items-center mt-4">
      <div className="h-auto w-full">
        <Image
          src={image}
          alt="Project"
          layout="responsive"
          objectFit="contain"
          style={{ maxHeight: '80vh', width: 'auto' }}
        />
      </div>
      <div className="w-full h-[10vh] max-w-full border-t border-black flex items-center justify-center text-xl py-2">
        <p>{version}</p>
      </div>
    </div>
  );
};

export default Display;
