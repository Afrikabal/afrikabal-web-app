import React from 'react'
import Image from 'next/image'
import loader from '@/images/Ball@1x-1.0s-200px-200px (1).svg'

function Loader() {
  return (
      <div className="flex justify-center items-center h-screen">
          <Image
              src={loader}
              alt='loader'
              className='text-lime-600'
          />
          
      </div>
  )
}

export default Loader
