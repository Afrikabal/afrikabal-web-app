import React from 'react'
import Image from 'next/image'
import Save from '@/images/secure.jpg'
function SaveMoneyBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Save}
                  alt="Phone and debit card"
                  width={300}
                  height={500}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-lime-600 mb-4">
                  Turn off access, <br /> turn on safety.
              </h1>
              <p className="text-gray-600 mb-6">
                  Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try.

              </p>
              <a href="#" className="text-lime-600 font-semibold hover:underline">
                 Learn How to Block Your Afrikabal Card &rarr;
              </a>
              
          </div>
          
      </div>
  )
}

export default SaveMoneyBanner
