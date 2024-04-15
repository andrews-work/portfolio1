import React from "react";
import Link from 'next/link';

const Complete: React.FC = () => {
  return (
    <div className="text-xl mb-[3vh]">
      <h1 className="text-3xl mb-[2vh]">Complete</h1>
      <p>
        <a>
          <Link href="/projects/web-basics/rock-paper-scissors" className="decoration-none hover:underline">
            001 - Rock Paper Scissors
          </Link>
        </a>
      </p>
      <p>
        <a>
          <Link href="/projects/web-basics/weather" className="decoration-none hover:underline">
            002 - Weather
          </Link>
        </a>
      </p>
      <p>
        <a>
          <Link href="/projects/web-basics/todo" className="decoration-none hover:underline">
            003 - Todo
          </Link>
        </a>
      </p>
      <p>
        <a>
          <Link href="/projects/web-basics/expense" className="decoration-none hover:underline">
            004 - Expense Tracker
          </Link>
        </a>
      </p>
      <p>
        <a>
          <Link href="/projects/web-basics/cart" className="decoration-none hover:underline">
            005 - Shopping Cart
          </Link>
        </a>
      </p>
      <p>
        <a>
          <Link href="/projects/python/nba" className="decoration-none hover:underline">
            006 - Data NBA
          </Link>
        </a>
      </p>
    </div>
  );
};

export default Complete;
