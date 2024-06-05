import React from 'react';
import Link from 'next/link';
import { info } from '../../../../components/labels';

const InfoM = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="h-[80vh] w-full flex flex-col space-y-5 ml-[5vw]">

        <div className="flex-grow">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-black text-3xl mb-[1vh] ">{info.about}</h1>
            <div className="flex ">
              <h4 className="text-xl mb-[1vh]">1. </h4>
              <Link href="/websites" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4> {info.websites}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">2. </h4>
              <Link href="/projects" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.scripts}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">3. </h4>
              <Link href="/languages" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.apps}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">4. </h4>
              <Link href="/store/" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.data}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">5. </h4>
              <Link href="/store/" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.ai}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">6. </h4>
              <Link href="/store/" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.mobile}</h4>
              </Link>
            </div>
            <div className="flex">
              <h4 className="text-xl mb-[1vh]">7. </h4>
              <Link href="/store/" className="text-black decoration-none hover:underline text-xl ml-[1vw]">
                <h4>{info.store}</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-black text-3xl mb-[1vh]">{info.reviews}</h1>
            <h4 className="text-xl">{info.first}</h4>
            <h4 className="text-xl">{info.second}</h4>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-black text-3xl mb-[1vh]">{info.contact}</h1>
            <h4 className="text-xl">{info.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoM;
