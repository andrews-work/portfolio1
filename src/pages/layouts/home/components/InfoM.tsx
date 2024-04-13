import React from 'react';
import Link from 'next/link';
import { info } from '../../../../components/labels';

const InfoM = () => {
  return (
    <div className="h-[90vh] w-full flex flex-col">
      <div className="w-full p-4">
        <div className="h-[35vh] flex flex-col justify-center">
          <div className="ml-[5vw]">
            <h1 className="font-bold text-black text-3xl mb-[1vh]">{info.about}</h1>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">1. </h4>
              <Link href="/websites" className="text-black underline text-xl ml-[1vw]">
                <h4> {info.websites}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">2. </h4>
              <Link href="/projects" className="text-black underline text-xl ml-[1vw]">
                <h4>{info.projects}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">3. </h4>
              <Link href="/languages" className="text-black underline text-xl ml-[1vw]">
                <h4>{info.languages}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">4. </h4>
              <Link href="/store/" className="text-black underline text-xl ml-[1vw]">
                <h4>{info.store}</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="h-[25vh] flex flex-col justify-center">
          <div className="ml-[5vw] mb-[1vh]">
            <h1 className="font-bold text-black text-3xl mb-[1vh]">{info.reviews}</h1>
            <h4 className="text-xl">{info.first}</h4>
            <h4 className="text-xl">{info.second}</h4>
          </div>
        </div>
      </div>
      <div className="w-full p-4">
        <div className="h-[25vh] flex flex-col justify-center">
          <div className="ml-[5vw] mb-[1vh]">
            <h1 className="font-bold text-black text-3xl mb-[1vh]">{info.contact}</h1>
            <h4 className="text-xl">{info.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoM;
