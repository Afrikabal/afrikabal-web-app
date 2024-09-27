import React from 'react'
import { AiOutlinePieChart } from 'react-icons/ai'
import { FaBriefcase, FaCreditCard, FaFileInvoice, FaHome, FaLightbulb, FaMobileAlt, FaMoneyBill, FaPaperPlane, FaTv, FaWifi } from 'react-icons/fa'
import { FcMoneyTransfer } from 'react-icons/fc'
import { GiCash } from 'react-icons/gi'
import { MdSmartphone, MdSupervisorAccount } from 'react-icons/md'
import { TbApi } from 'react-icons/tb'

function Business() {
  return (
      <div className='absolute left-0  pt-6 top-full hidden group-hover:flex flex-row bg-white shadow-lg mt-2 w-fit h-fit rounded-sm'>
          <div className='p-2 px-5'>
              <ul className="flex flex-col gap-2 text-gray-600 text-sm text-nowrap">
                  <li className="flex items-center gap-1 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1 rounded-full'>
                          <FaHome />
                      </span>
                      Discover Business
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-purple-100 text-black-600 p-1 rounded-full'>
                          <FaBriefcase />
                      </span>
                      Business Registration
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaMobileAlt />
                      </span>
                      softPOS
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-neutral-100 text-black p-1 rounded-full'>
                          <GiCash />
                      </span>
                      Cashback
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                          <FaCreditCard />
                      </span>
                      POS Machine
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaFileInvoice />
                      </span>
                      Invoicing
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-black p-1 rounded-full'>
                          <FcMoneyTransfer />
                      </span>
                      Salary Loan
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-neutral-100 text-black p-1 rounded-full'>
                          <TbApi />
                      </span>
                      Business API
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                          <AiOutlinePieChart />
                      </span>
                      Payroll with Bento
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-green-100 text-lime-600 p-1 rounded-full'>
                          <MdSupervisorAccount />
                      </span>
                      Sub Accounts
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-black p-1 rounded-full'>
                          <MdSmartphone />
                      </span>
                      Virtual POS
                  </li>
              </ul>

          </div>

          <div className='p-2 px-5 bg-neutral-100'>
              <ul className="flex text-nowrap flex-col gap-2 text-gray-600">
                  <h3 className="text-xs text-gray-500 font-normal">PAYMENTS</h3>
                  <li className="flex items-center gap-1 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full '>
                          <FaPaperPlane />
                      </span>
                      Send Money
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaTv />
                      </span>
                      TV
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaWifi />
                      </span>
                      Airtime & Internet Data
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-red-100 text-red-600 p-1 rounded-full'>
                          <FaLightbulb />
                      </span>
                      Electricity
                  </li>
                  <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-lime-600 cursor-pointer">
                      <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                          <FaMoneyBill />
                      </span>
                      Bill Payments
                  </li>

              </ul>

          </div>

      </div>
  )
}

export default Business
