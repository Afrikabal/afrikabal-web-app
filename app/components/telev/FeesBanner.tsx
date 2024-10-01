import React from 'react'
import Image from 'next/image'
import Fees from '@/images/fees.jpg'

function FeesBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Fees}
                  alt="Phone and debit card"
                  width={500}
                  height={700}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-xl md:text-5xl font-bold text-lime-600 mb-4">
                  Fees as clear as <br /> glass.
              </h1>
              <p className="text-gray-600 mb-6">
                  We’re serious about free banking, and we will never, ever charge you for anything without your consent.
              </p>
              <a href="#" className="text-lime-600 font-semibold hover:underline">
                  See all Our Fees &rarr;
              </a>
          </div>

      </div>
  )
}

export default FeesBanner
