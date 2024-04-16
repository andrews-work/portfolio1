import React from 'react';
import Link from 'next/link';
import GalleryT from '../components/GalleryT';

const TabletWebsites = () => {
  return (
    <div className="flex flex-col h-screen text-white bg-black">
      <header className="flex ml-[2vw] mt-[2vh]">
        <Link href="/" className="text-xl">Home</Link>
      </header>

      <main className="flex items-center flex-grow">
        <GalleryT />
      </main>
    </div>
  );
};

export default TabletWebsites;
