"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import afrikabal from '@/images/afrikabal.png';
import { FaCreditCard, FaHome, FaPaperPlane, FaReceipt } from 'react-icons/fa';
import { IoPieChart } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';

export default function Header() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center fixed top-0 w-full z-50">
            <div className="text-lime-600 font-bold text-xl md:text-2xl">
                <Image src={afrikabal} alt='afrikabal logo' />
            </div>

            <div className='hidden rs:flex gap-10'>
                <ul className='flex gap-10'>
                    <div className='relative group flex items-center gap-2'>
                        <FaHome />
                        <li className='cursor-pointer text-lime-600'>Home</li>
                    </div>
                    <div className='relative group flex items-center gap-2'>
                        <FaPaperPlane />
                        <li className='cursor-pointer text-lime-600'>Send</li>
                    </div>
                    <div className='relative group flex items-center gap-2'>
                        <FaReceipt />
                        <li className='cursor-pointer text-lime-600'>Pay</li>
                    </div>
                    <div className='relative group flex items-center gap-2'>
                        <IoPieChart />
                        <li className='cursor-pointer text-lime-600'>Budget</li>
                    </div>
                    <div className='relative group flex items-center gap-2'>
                        <FaCreditCard />
                        <li className='cursor-pointer text-lime-600'>Card</li>
                    </div>
                </ul>
            </div>

            <div className="flex items-center space-x-2">
                <Link href="/account">
                    <div className="hidden md:flex items-center space-x-2 bg-lime-200 p-2 rounded-full cursor-pointer">
                        <MdAccountCircle className="text-2xl" />
                        <span className="text-gray-600">Account</span>
                    </div>
                </Link>
            </div>
        </header>
    );
}
