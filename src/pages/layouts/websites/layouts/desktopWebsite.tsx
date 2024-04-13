import React from 'react';
import Link from 'next/link';
import Gallery from '../components/Gallery';

const DesktopWebsites = () => {
  return (
    <div className="flex flex-col h-screen text-white bg-black">
      <header className="flex ml-[2vw] mt-[2vh] h-[10vh]">
        <Link href="/" className="text-2xl">Home</Link>
      </header>

      <main className="flex items-center justify-center flex-grow h-[80vh]">
          <Gallery />
      </main>

      <footer className="flex items-center justify-center h-[10vh]">
      </footer>
    </div>
  );
};

export default DesktopWebsites;
