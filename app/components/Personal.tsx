import React from 'react'
import { BsFillSuitSpadeFill } from 'react-icons/bs'
import { FaCarAlt, FaCoins, FaCreditCard, FaGift, FaGlobe, FaHome, FaLifeRing, FaLightbulb, FaMobileAlt, FaMoneyCheck, FaPiggyBank, FaTv, FaWallet, FaWifi } from 'react-icons/fa'
import { TbMoneybag } from 'react-icons/tb'

function Personal() {
  return (
        <div className='absolute left-0  pt-6 top-full hidden group-hover:flex flex-row bg-white shadow-lg mt-2 w-fit h-fit rounded-sm'>
            <div className='p-2 px-5'>
                <ul className="flex flex-col gap-2 text-gray-600 text-sm text-nowrap">
                    <li className="flex items-center gap-1 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-green-100 text-green-600 p-1 rounded-full'>
                            <FaHome />
                        </span>
                        Discover Personal
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                            <FaMoneyCheck />
                        </span>
                        Transfer & Spend
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-orange-100 text-orange-600 p-1 rounded-full'>
                            <FaPiggyBank />
                        </span>
                        Save
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-green-100 text-green-600 p-1 rounded-full'>
                            <FaWallet />
                        </span>
                        Investments
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                            <FaCreditCard />
                        </span>
                        afrikabal Card
                    </li>
                </ul>

            </div>

            <div className='p-2 px-5 bg-neutral-100'>
                <ul className="flex text-nowrap flex-col gap-2 text-gray-600">
                    <h3 className="text-xs text-gray-500 font-normal">PAYMENTS</h3>
                    <li className="flex items-center gap-1 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-red-100 text-red-600 p-1 rounded-full '>
                            <FaLightbulb />
                        </span>
                        Electricity
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                            <FaMobileAlt />
                        </span>
                        Airtime
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                            <FaWifi />
                        </span>
                        Internet
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-green-100 text-green-600 p-1 rounded-full'>
                            <FaGift />
                        </span>
                        Gift Cards
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-orange-100 text-orange-600 p-1 rounded-full'>
                            <FaGlobe />
                        </span>
                        Cardless Payments
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                            <FaTv />
                        </span>
                        TV
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-red-100 text-red-600 p-1 rounded-full  '>
                            <BsFillSuitSpadeFill />
                        </span>
                        Betting
                    </li>
                    <li className="flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer">
                        <span className='icon-wrapper bg-purple-100 text-purple-600 p-1 rounded-full'>
                            <FaCarAlt />
                        </span>
                        Transport
                    </li>
                </ul>
                <ul className='flex text-nowrap flex-col gap-3 text-gray-600'>
                    <h3 className='text-xs text-gray-500 font-normal'>CREDITS</h3>
                    <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer'>
                        <span className='icon-wrapper bg-sky-100 text-sky-400 p-1 rounded-full'>
                            <FaLifeRing />

                        </span>
                        OverDrafts

                    </li>
                    <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer'>
                        <span className='icon-wrapper bg-orange-100 text-orange-600 p-1 rounded-full'>
                            <FaCoins />
                        </span>
                        Salary Loan

                    </li>
                    <li className='flex items-center gap-2 hover:bg-gray-200 p-1 rounded-md hover:text-green-600 cursor-pointer'>
                        <span className='icon-wrapper bg-green-100 text-green-600 p-1    rounded-full'>
                            <TbMoneybag />
                        </span>
                        Loans

                    </li>

                </ul>

            </div>

        </div>
                            
  )
}

export default Personal

