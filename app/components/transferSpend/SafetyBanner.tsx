import React from 'react'
import Image from 'next/image'
import Block from '@/images/username.jpg'

function SafetyBanner() {
  return (

      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-xl md:text-5xl font-bold text-lime-600 mb-4">
                  Send money <br /> without an account <br /> number.
              </h1>
              <p className="text-gray-600 mb-6">
                  There&apos;s more than one way to send money for free. Create a Kuda Username for quick transfers to other Kuda Usernames.
              </p>
              
          </div>
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Block}
                  alt="Phone and debit card"
                  width={500}
                  height={700}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>

      </div>
  )
}

export default SafetyBanner
