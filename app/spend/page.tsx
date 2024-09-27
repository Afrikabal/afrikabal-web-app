"use client";

import {useEffect, useState} from 'react'
import Image from 'next/image'
import Header from '../components/transferSpend/Header'
import LandingLayout from '../components/transferSpend/LandingLayout'
import BodyContent from '../components/transferSpend/BodyContent'

import gif from '@/images/sendmoney.jpg'
import Footer from '../components/transferSpend/Footer'
import Loader from '../components/transferSpend/Loader'


function Home() {
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
          title='Send money for free anytime.'
          content='Your Kuda account comes with 25 free transfers to other banks every month. That’s up to 15,000 naira saved on transfers every year.'
          redirect={
            <>
              <a
                href="/signup"
                className="bg-lime-600 text-black px-6 py-3 rounded-full hover:bg-lime-800 transition"
              >
                Join Afrikabal
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
  )
}

export default Home

