import React from 'react'

function HelpView() {
  return (
      <div className='absolute left-0  pt-12 top-0 flex flex-row bg-white mt-2 w-fit h-fit rounded-sm'>
          <div className='p-2 px-5'>
              <ul className='flex flex-col gap-2 text-gray-600 text-sm text-nowrap'>
                  <li className='flex items-center gap-1  p-1  hover:text-green-600 cursor-pointer'>Get Help</li>
                  <li className='flex items-center gap-1  p-1  hover:text-green-600 cursor-pointer'>Scam Awareness</li>
                  <li className='flex items-center gap-1  p-1  hover:text-green-600 cursor-pointer'>FAQs</li>
                  <li className='flex items-center gap-1  p-1  hover:text-green-600 cursor-pointer'>Security</li>
                  <li className='flex items-center gap-1  p-1  hover:text-green-600 cursor-pointer'>Contact Us</li>
                  <li className='flex items-center gap-1  p-1  hover:text-green-600 cursor-pointer'>Self Help</li>
              </ul>

          </div>

      </div>
  )
}

export default HelpView
