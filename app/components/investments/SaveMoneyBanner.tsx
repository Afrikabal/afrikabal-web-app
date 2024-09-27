import React from 'react'
import Image from 'next/image'
import Save from '@/images/confirm.jpg'
function SaveMoneyBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-lime-600 mb-4">
                  We’ll show you up- <br /> to-date stock prices <br /> and send you trade <br /> notifications for <br /> your peace of mind.
              </h1>
              <p className="text-gray-600 mb-6">
                  See current stock prices on your Kuda app and get an instant alert for every activity on your trading account.
              </p>
              <a href="/signup" className="text-lime-600 font-semibold hover:underline">
                  Join Afrikabal &rarr;
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
