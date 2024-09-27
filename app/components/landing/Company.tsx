
import React from 'react'

function Company() {
    return (
        <div className='absolute left-0  pt-6 top-full hidden group-hover:flex flex-row bg-white shadow-lg mt-2 w-fit h-fit rounded-sm'>
            <div className='p-2 px-5'>
                <ul className='flex flex-col gap-2 text-gray-600 text-sm text-nowrap'>
                    <li className='flex items-center gap-1  p-1  hover:text-lime-600 cursor-pointer'>Blog</li>
                    <li className='flex items-center gap-1  p-1 hover:text-lime-600 cursor-pointer'>Press</li>
                    <li className='flex items-center gap-1  p-1 hover:text-lime-600 cursor-pointer'>Join Our Team</li>
                    <li className='flex items-center gap-1  p-1 hover:text-lime-600 cursor-pointer'>About Us</li>

                </ul>

            </div>

        </div>
    )
}

export default Company
