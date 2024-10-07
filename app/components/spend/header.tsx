"use client";

import React from 'react';
import Image from 'next/image';
import afrikabal from '@/images/afrikabal.png';
import { FaCreditCard, FaHome, FaPaperPlane, FaReceipt } from 'react-icons/fa';
import { IoPieChart } from 'react-icons/io5';
import Profile from '@/images/profile2.jpg'
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    const handleProfileClick = () => {
        router.push("/account");
    };
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

            <div className="flex items-center space-x-4">
                <button onClick={handleProfileClick}>
                    <Image src={Profile} className="w-10 h-7 rounded-full" alt="Profile" />
                </button>
            </div>
        </header>
    );
}
