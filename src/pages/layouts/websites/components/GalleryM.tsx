import React, { useState } from 'react';
import Image from 'next/image';
import { images } from '../../../../components/data/labels';

const GalleryM = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const currentImage = images[currentImageIndex];
  
    const handlePreviousClick = () => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };
  
    const handleNextClick = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };
  
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <div className="flex-col w-full flex items-center justify-center">
          {/* title */}
          <div className="w-[85vw] h-[5vh]  mt-[5vh]">
            <h1>{currentImage.title}</h1>
          </div>
          {/* image */}
          <div className="flex-col justify-between w-[85vw]">
            {/* desktop image */}
            <div className="w-full h-[30vh] relative mb-[10vh]">
              <Image className="mt-[5vh]"
                src={currentImage.src}
                alt={currentImage.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* phone image */}
            <div className="w-full h-[90vh] relative mt-[5vh]">
              <h1 className="mb-[10vh]">Mobile</h1>
              <Image className="mt-[5vh]"
                src={currentImage.src2}
                alt={currentImage.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-between w-[85vw] mt-[10vh] mb-[5vh]">
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    );
  };
 
export default GalleryM;