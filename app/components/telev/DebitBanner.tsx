import React from 'react'
import Debit from '@/images/ussd.jpg'
import Image from 'next/image'

function DebitBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Debit}
                  alt="Phone and debit card"
                  width={300}
                  height={500}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-lime-600 mb-4">
                  Find all major TV<br /> service providers.
              </h1>
              <p className="text-gray-600 mb-6">
                  DStv, Showmax, GOtv and StarTimes are all easy-to-find options for you on the Afrikabal app.
              </p>
              <a href="/signup" className="text-lime-600 font-semibold hover:underline">
                  Join Kuda &rarr; 
              </a>
          </div>
          
      </div>
  )
}

export default DebitBanner
