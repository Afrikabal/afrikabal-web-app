import React from 'react'
import Image from 'next/image'
import Manage from '@/images/stocks.jpg'
function ManagementBanner() {
  return (
      
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Manage}
                  alt="Phone and debit card"
                  width={500}
                  height={700}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-xl md:text-5xl font-bold text-lime-600 mb-4">
                  Your money-making <br /> options now include <br /> earning dividends <br /> and selling stocks.
              </h1>
              <p className="text-gray-600 mb-6">
                  Make a passive income from dividends paid directly into your trading account or sell your stocks at your convenience.

              </p>
              <a href="#" className="text-lime-600 font-semibold hover:underline">
                  Learn more about selling stocks on Afrikabal &rarr;
              </a>

          </div>
          
      </div>
  )
}

export default ManagementBanner
