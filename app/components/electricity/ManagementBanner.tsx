import React from 'react'
import Image from 'next/image'
import Manage from '@/images/company.jpg'
function ManagementBanner() {
  return (
      
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-xl md:text-5xl font-bold text-lime-600 mb-4">
                  Find all major <br /> electricity <br /> distribution <br /> companies on the <br /> Afrikabal app.
              </h1>
              <p className="text-gray-600 mb-6">
                  Wherever you are, you can buy prepaid meter units from any distribution company in Nigeria.
              </p>
              <a href="/signup" className="text-lime-600 font-semibold hover:underline">
                  Download Afrikabal &rarr;
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
