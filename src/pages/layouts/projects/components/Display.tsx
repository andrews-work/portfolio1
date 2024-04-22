import React from 'react';
import Image from 'next/image';

interface DisplayProps {
  image: string;
  version: string;
}

const Display: React.FC<DisplayProps> = ({ image, version }) => {
  return (
    <div className="">
      <div className="">
        <Image
          src={image}
          alt="Project"
          layout="responsive"
          objectFit="contain"
          style={{ maxHeight: '80vh', width: 'auto' }}
        />
      </div>
      <div className="">
        <p>{version}</p>
      </div>
    </div>
  );
};

export default Display;
