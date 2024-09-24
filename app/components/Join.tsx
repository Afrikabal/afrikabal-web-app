import React from 'react'
import gif from '@/images/harvest.jpg'
import Image from 'next/image'


function Join() {
  return (
      <div className="bg-lime-50 py-16 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center max-w-6xl px-6">
              
              <div className="md:w-1/2">
                  <h2 className="text-4xl font-bold text-lime-600 mb-4">The Agritech app for Africans.</h2>
                  <p className="text-lg text-gray-600 mb-6">Save, spend, send and invest money across borders.</p>
                  <a href="#" className="bg-lime-600 text-white px-6 py-3 rounded-full hover:bg-lime-600 transition">Join Afrikabal</a>
              </div>

              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                  <Image src={gif} alt="Money app for Africans" className="w-80 md:w-full" />
              </div>
          </div>
      </div>
  )
}

export default Join
