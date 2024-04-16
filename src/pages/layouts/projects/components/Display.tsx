import React, { CSSProperties } from 'react';
import Image from 'next/image';

interface DisplayProps {
  image: string;
  version: string;
}

const Display: React.FC<DisplayProps> = ({ image, version }) => {
  return (
    <div className="flex h-[90vw] w-full items-center mt-4">
      <div className="h-auto w-full">
        <Image src={image} alt="Project" layout="responsive" objectFit="contain" style={{ width: '100%', height: 'auto' } as CSSProperties} />
      </div>
      <div className="w-full max-w-[95vw] border-t border-black flex items-center justify-center text-xl py-2">
        <p>{version}</p>
      </div>
    </div>  
  );
};

export default Display;
