import React from 'react'
import Image from 'next/image'
import Save from '@/images/savemoney.jpg'
function SaveMoneyBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-lime-600 mb-4">
                  Save money as you <br /> spend it, seriously. 
              </h1>
              <p className="text-gray-600 mb-6">
                  You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.
              </p>
              <a href="#" className="text-lime-600 font-semibold hover:underline">
                  See all our Savings &rarr;
              </a>
          </div>
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Save}
                  alt="Phone and debit card"
                  width={300}
                  height={500}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
      </div>
  )
}

export default SaveMoneyBanner
