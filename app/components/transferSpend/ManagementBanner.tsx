import React from 'react'
import Image from 'next/image'
import Manage from '@/images/debit.jpg'
function ManagementBanner() {
  return (
      
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-xl md:text-5xl font-bold text-lime-600 mb-4">
                  Kuda debit card = <br /> A simpler life
              </h1>
              <p className="text-gray-600 mb-6">
                  You can&apos;t avoid spending. That&apos;s how you pay for your needs. Pick up your Kuda card or have us deliver it to your address and never pay a card maintenance fee.
              </p>
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
