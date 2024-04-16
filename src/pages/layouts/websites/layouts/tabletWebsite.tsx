import React from 'react';
import Link from 'next/link';
import GalleryM from '../components/GalleryM';

const TabletWebsites = () => {
  return (
    <div className="flex flex-col h-screen text-white bg-black">
      <header className="flex ml-[2vw] mt-[2vh]">
        <Link href="/" className="text-xl">Home</Link>
      </header>

      <main className="flex items-center flex-grow">
        <GalleryM />
      </main>
    </div>
  );
};

export default TabletWebsites;
