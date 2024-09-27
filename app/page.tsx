"use client";
import BodyContent from '@/app/components/BodyContent';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import gif from '@/images/harvest.png'
import LandingLayout from './components/LandingLayout';
import Header from './components/Header';
import AppStore from '@/images/app_store.png'
import GooglePlay from '@/images/googleplay-removebg-preview.png'
import Loader from './components/Loader';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <LandingLayout>
      <div className='bg-white h-screen w-screen overflow-x-hidden text-black font-pacifico'>
        <Header />
        <BodyContent
          title='The money app for Africans.'
          content='Make free transfers, enjoy cashless payment options and earn interest on your savings with Afrikabal.'
          redirect={
            <>
              <a
                href="https://apps.apple.com/app/kuda-bank/id1483960795"
                target="_blank"
                rel="noopener noreferrer"
              
              >
               <Image src={AppStore} alt='app store' className='w-40 h-40'/>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.kuda.android"
                target="_blank"
                rel="noopener noreferrer"
              
              >
                <Image src={GooglePlay} alt='google play' className='w-40 h-40'/>
              </a>
            </>
          }
          image={
            <Image
              src={gif}
              alt="afrikabal Card"
              width={500}
              height={700}
              className="rounded-lg"
            />
          }
        />
        <Footer />
      </div>
    </LandingLayout>
  );
}
