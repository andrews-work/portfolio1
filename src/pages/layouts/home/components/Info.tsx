import React from 'react';
import Link from 'next/link';
import { info } from '../../../../components/labels';

const Info = () => {
  return (
    <div className="h-[90vh] w-[25vw] border-r items-center justify-center border-black flex flex-col">
      <div className="w-full p-4">
        <div className="flex flex-col justify-center">
          <div className="ml-[5vw]">
            <h1 className="text-black text-5xl mb-[2vh]">{info.about}</h1>
            <div className="flex ">
              <h4 className="text-xl mb-[1vh]">1. </h4>
              <Link href="/websites" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4> {info.websites}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">2. </h4>
              <Link href="/projects" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.projects}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">3. </h4>
              <Link href="/languages" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.languages}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">4. </h4>
              <Link href="/store/" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.store}</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="h-[40vh] flex flex-col justify-center">
          <div className="ml-[5vw]">
            <h1 className="text-black text-5xl mb-[2vh]">{info.reviews}</h1>
            <h4 className="text-3xl mb-[1vh]">{info.first}</h4>
            <h4 className="text-3xl mb-[1vh]">{info.second}</h4>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="h-[15vh] flex flex-col justify-center">
          <div className="ml-[5vw]">
            <h1 className="text-black text-5xl mb-[2vh]">{info.contact}</h1>
            <h4 className="text-3xl mb-[1vh]">{info.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
