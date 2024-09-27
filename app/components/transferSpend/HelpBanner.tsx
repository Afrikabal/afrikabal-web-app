import React from 'react'
import Image from 'next/image'
import Happy from '@/images/pay.jpg'

function HelpBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Happy}
                  alt="Phone and debit card"
                  width={300}
                  height={500}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-lime-600 mb-4">
                  Pay online without <br /> a debit card.
              </h1>
              <p className="text-gray-600 mb-6">
                  Pay directly from your Kuda account on online stores with Pay ID, no card needed.
              </p>
             
          </div>
          
      </div>
  )
}

export default HelpBanner
