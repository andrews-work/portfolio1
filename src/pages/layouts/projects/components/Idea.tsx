import React from "react";
import Link from 'next/link';

const Idea: React.FC = () => {
  return (
    <div className="text-xl mb-[3vh]">
      <h1 className="text-3xl mb-[2vh]">Idea</h1>
      <p>
        <Link href="/projects/python/trade" className="decoration-none hover:underline">
          008 - Forex Trading Bot
        </Link>
      </p>
    </div>
  );
};

export default Idea;
