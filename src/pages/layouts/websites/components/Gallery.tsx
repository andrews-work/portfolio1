import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../../../../components/data/labels';

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImage = images[currentImageIndex];

  const handlePreviousClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex-col w-full h-[70vh] flex items-center justify-center">
        {/* title */}
        <div className="w-[83vw] h-[5vh]">
          <h1 className="text-5xl">{currentImage.title}</h1>
        </div>
        {/* image */}
        <div className="flex w-[95vw]">
          {/* desktop image */}
          <div className="w-[72vw] h-[60vh] relative">
            <Link href={currentImage.link}>
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  layout="fill"
                  objectFit="contain"
                />
            </Link>
          </div>
          {/* phone image */}
          <div className="w-[20vw] h-[60vh] relative">
            <Link href={currentImage.link}>
                <Image
                  src={currentImage.src2}
                  alt={currentImage.alt}
                  layout="fill"
                  objectFit="contain"
                />
            </Link>
          </div>
        </div>
        {/* buttons */}
        <div className="flex w-full justify-center mt-[3vh] text-5xl">
          <button className="mr-[1vw]" onClick={handlePreviousClick}>Previous</button>
          <button className="ml-[1vw]" onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
