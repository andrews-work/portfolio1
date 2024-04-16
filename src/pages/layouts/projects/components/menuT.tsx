import React from 'react';
import Link from 'next/link';

const MenuT = () => {
  return (
    <div className="flex h-[90vh] w-full bg-[#f5f5f5] items-center justify-center space-x-[4vw]">
      <div className="h-[30vh] w-[20vw] relative group">
        <div className="h-[8vh] w-[20vw] flex items-center bg-white justify-center border-2 border-solid border-black">
          <h2 className="text-l">Web basics</h2>
        </div>
        <div className="absolute top-[8vh] left-0 h-0 w-[25vw] flex flex-col items-center space-y-4 mt-[2vh] overflow-hidden transition-all duration-300 group-hover:h-[32vh]">
          <div className="h-full w-full flex flex-col ml-[1vw] space-y-4 mt-[2vh] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Link href="/projects/web-basics/rock-paper-scissors" id="1" className="text-l text-black decoration-none hover:underline">
              001 - Rock Paper Scissors
            </Link>
            <Link href="/projects/web-basics/weather" className="text-l text-black decoration-none hover:underline">
              002 - Weather API
            </Link>
            <Link href="/projects/web-basics/todo" className="text-l text-black decoration-none hover:underline">
              003 - Todo List
            </Link>
            <Link href="/projects/web-basics/expense" className="text-l text-black decoration-none hover:underline">
              004 - Expense Tracker
            </Link>
            <Link href="/projects/web-basics/cart" className="text-l text-black decoration-none hover:underline">
              005 - Shopping Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[30vh] w-[20vw] relative group">
        <div className="h-[8vh] w-[20vw] flex items-center bg-white justify-center border-2 border-solid border-black ">
          <h2 className="text-l">Python</h2>
        </div>
        <div className="absolute top-[8vh] left-0 h-0 w-[20vw] flex flex-col items-center space-y-4 mt-[2vh] overflow-hidden transition-all duration-300 group-hover:h-[32vh]">
          <div className="h-full w-full flex flex-col ml-[5vw] space-y-4 mt-[2vh] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Link href="/projects/python/nba" className="text-l text-black decoration-none hover:underline">
              006 - Data NBA
            </Link>
            <Link href="/projects/python/trade" className="text-l text-black decoration-none hover:underline">
              008 - Trading Bot
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[30vh] w-[20vw] relative group">
        <div className="h-[8vh] w-[20vw] flex items-center bg-white justify-center border-2 border-solid border-black ">
          <h2 className="text-l">Java</h2>
        </div>
        <div className="absolute top-[8vh] left-0 h-0 w-[20vw] flex flex-col items-center space-y-4 mt-[2vh] overflow-hidden transition-all duration-300 group-hover:h-[32vh]">
          <div className="h-full w-full flex flex-col ml-[5vw] space-y-4 mt-[2vh] opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Link href="/projects/java/mp3" className="text-l text-black decoration-none hover:underline">
              007 - MP3 Player
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuT;
