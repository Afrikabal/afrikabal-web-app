import React from 'react'
import Image from 'next/image'
import Manage from '@/images/bank.jpg'
function ManagementBanner() {
  return (
      
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
         
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-xl md:text-5xl font-bold text-lime-600 mb-4">
                  Transform the way <br /> you pay online.
              </h1>
              <p className="text-gray-600 mb-6">
                  Forget cards, use Pay With Bank on Kuda for fast and reliable local web payments.
              </p>
              <a href="/signup" className="text-lime-600 font-semibold hover:underline">
                  See How To Pay With Banks Works &rarr;
              </a>
          </div>
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Manage}
                  alt="Phone and debit card"
                  width={500}
                  height={700}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
          
      </div>
  )
}

export default ManagementBanner
