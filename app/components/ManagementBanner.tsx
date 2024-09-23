import React from 'react'
import Image from 'next/image'
import Manage from '@/images/money.png'
import { FaCalendarAlt, FaFileInvoiceDollar, FaGift, FaGlobe, FaInfinity, FaLock, FaMobileAlt, FaPaperPlane, FaPiggyBank, FaUserAlt } from 'react-icons/fa'


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
                  Your phone + <br /> our app + <br /> a debit card = <br /> a simpler life.
              </h1>
              <p className="text-gray-600 mb-6">
                  We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.
              </p>
          </div>
          
      </div>
  )
}

export default ManagementBanner
