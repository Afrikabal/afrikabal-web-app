import React from 'react'

import BodyContent from '../../components/BodyContent';
import Footer from '../../components/Footer';
import Image from 'next/image';
import gif from '@/images/harvest.jpg'



function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>

) {
  
  return (
    <div className=' bg-white h-screen w-screen overflow-x-hidden text-black' >
      {/* <Header /> */}

      <BodyContent title='The money app for Africans.' content='Make free transfers, enjoy cashless payment options and earn interest
                  on your savings with Afrikabal.' redirect =  <>
          <a
            href="https://apps.apple.com/app/kuda-bank/id1483960795"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white flex items-center px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
          >

            <span className="text-sm">Download on the App Store</span>
          </a>


          <a
            href="https://play.google.com/store/apps/details?id=com.kuda.android"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-600 text-neutral-700 flex items-center px-4 py-2 rounded-lg shadow-lg hover:bg-lime-400 transition"
          >

            <span className="text-sm">Get it on Google Play</span>
          </a>
        </>
      
        image=<Image
                      src={gif} 
                      alt="afrikabal Card"
                      width={500}
                      height={700}
                      className="rounded-lg"
                  /> />
      
      <Footer />
      {children}

    </div>
  )
}

export default layout
