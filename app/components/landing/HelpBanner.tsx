import React from 'react'
import Image from 'next/image'
import Happy from '@/images/happy.jpg'

function HelpBanner() {
  return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-24">
          <div className="max-w-lg text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-lime-600 mb-4">
                  We’re always <br /> happy to help you. 
              </h1>
              <p className="text-gray-600 mb-6">
                  You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy.
              </p>
              <a href="#" className="text-lime-600 font-semibold hover:underline">
                  Get Help &rarr;
              </a>
          </div>
          <div className="relative mt-8 md:mt-0 p-6 px-6">
              <Image
                  src={Happy}
                  alt="Phone and debit card"
                  width={300}
                  height={500}
                  className="w-full max-w-xs md:max-w-sm"
              />
          </div>
      </div>
  )
}

export default HelpBanner
