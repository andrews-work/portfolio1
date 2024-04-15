import React from 'react';
import HomePage from '@/pages/layouts/home/HomePage';
import './globals.css';
import Head from 'next/head';
import './styles.css';

const Page = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Page;
