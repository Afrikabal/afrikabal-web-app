import React from 'react'
import { FaCoins, FaCreditCard, FaGift, FaGlobe, FaHome, FaLifeRing, FaLightbulb, FaMobileAlt, FaMoneyCheck, FaPiggyBank, FaTv, FaWallet, FaWifi } from 'react-icons/fa'
import { TbMoneybag } from 'react-icons/tb'

function BusinessView() {
  return (
      <div className='absolute left-0  pt-12 top-0 flex flex-row bg-white mt-2 w-fit max-h-[500px] overflow-y-scroll no-scrollbar rounded-sm'>
          <div className='p-2 px-5'>
              <ul className='flex flex-col gap-2 text-gray-600 text-sm text-nowrap'>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1 rounded-full'>
                          <FaHome />
                      </span>
                      Discover Business
                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                          <FaMoneyCheck />
                      </span>
                      Business Registration
                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-orange-100 text-orange-600 p-1 rounded-full'>
                          <FaPiggyBank />
                      </span>
                      softPOS
                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1 rounded-full'>
                          <FaWallet />
                      </span>
                      Cashback
                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                          <FaCreditCard />
                      </span>
                      POS Machine
                  </li>

                  <h3 className='text-xs text-gray-500 font-normal'>PAYMENTS</h3>
                  <li className="flex items-center gap-1 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-red-100 text-red-600 p-1 rounded-full '>
                          <FaLightbulb />
                      </span>
                      Invoicing
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                          <FaMobileAlt />
                      </span>
                      Salary Loan
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaWifi />
                      </span>
                      Business API
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1 rounded-full'>
                          <FaGift />
                      </span>
                      Payroll with Bento
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-orange-100 text-orange-600 p-1 rounded-full'>
                          <FaGlobe />
                      </span>
                      Sub Accounts
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaTv />
                      </span>
                      Virtual POS
                  </li>
                  

                  <h3 className='text-xs text-gray-500 font-normal'>CREDITS</h3>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaLifeRing />

                      </span>
                      Send Money

                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-orange-100 text-orange-600 p-1 rounded-full'>
                          <FaCoins />
                      </span>
                      TV

                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1    rounded-full'>
                          <TbMoneybag />
                      </span>
                      Airtime & Internet Data

                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1    rounded-full'>
                          <TbMoneybag />
                      </span>
                      Elctricity

                  </li>
                  <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer'>
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1    rounded-full'>
                          <TbMoneybag />
                      </span>
                      Bill Payments

                  </li>
              </ul>

          </div>

      </div>
  )
}

export default BusinessView
