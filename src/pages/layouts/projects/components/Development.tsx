import React from "react";
import Link from 'next/link';

const Development: React.FC = () => {
  return (
    <div className="text-xl mb-[3vh]">
      <h1 className="text-3xl mb-[2vh]">Development</h1>
      <p>
        <Link href="/projects/java/mp3" className="decoration-none hover:underline">
          007 - MP3 Player
        </Link>
      </p>
    </div>
  );
};

export default Development;
