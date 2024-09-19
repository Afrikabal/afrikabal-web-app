"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import afrikabal from '@/images/afrikabal.png';
import Button from './Button';
import { FaBars, FaCarAlt, FaCoins, FaCreditCard, FaGift, FaGlobe, FaHome, FaLifeRing, FaLightbulb, FaMobileAlt, FaMoneyCheck, FaPiggyBank, FaTv, FaWallet, FaWifi } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { FaCaretRight } from 'react-icons/fa';
import { FaCaretDown } from "react-icons/fa";
import Personal from './Personal';
import Business from './Business';
import Company from './Company';
import Help from './Help';
import { TbMoneybag } from 'react-icons/tb';
import { BsFillSuitSpadeFill } from 'react-icons/bs';
import PersonalView from './PersonalView';
import BusinessView from './BusinessView';

function Header() {
    const [toggle, setToggle] = useState(false);
    const [toggleComponent, setToggleComponent] = useState<Number>(0);


    const headerToggle = () => {
        setToggle(prev => !prev);
        setToggleComponent(0);
    };

    const openComponent = ()  => {
        setToggleComponent()
    }

    return (
        <>
            <div className='flex justify-between text-sm px-12 p-3 shadow-md text-green-600 items-center font-muli'>
                <div className='flex gap-20 items-center'>
                    <Image src={afrikabal} alt="Afrikabal Logo" width={60} height={60} />
                    <div className='hidden md:flex gap-10'>
                        <ul className='flex gap-10'>
                            <div className='relative group flex items-center gap-2'>
                                <li className='cursor-pointer'>Personal</li>
                                <FaCaretDown />
                                <Personal />
                            </div>
                            <div className='relative group flex items-center gap-2'>
                                <li className='cursor-pointer'>Business</li>
                                <FaCaretDown />
                                <Business />
                            </div>
                            <div className='relative group flex items-center gap-2'>
                                <li className='cursor-pointer'>Company</li>
                                <FaCaretDown />
                                <Company />
                            </div>
                            <div className='relative group  flex items-center gap-2'>
                                <li className='cursor-pointer'>Help</li>
                                <FaCaretDown />
                                <Help />
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='hidden md:flex items-center gap-7'>
                    <Link href={"/"}>Sign In</Link>
                    <Button />
                </div>

                <span className='md:hidden text-black'>
                    {!toggle ? (
                        <button onClick={headerToggle}>
                            <FaBars />
                        </button>
                    ) : (
                        <button onClick={headerToggle}>
                            <CgClose />
                        </button>
                    )}
                </span>
            </div>

            {/* Conditionally render the mobile menu content based on the `toggle` state */}
            {( toggle && toggleComponent == 0 ) && (
                <div className='md:hidden w-screen my-5'>
                    <div className='flex gap-7'>
                        <Button />
                        <button className='p-2 px-8 text-sm bg-green-100 rounded-xl font-bold text-green-600 w-fit hover:translate-y-[-5px]'>
                            Sign In
                        </button>
                    </div>
                    <div className='w-screen text-green-600'>
                        <ul className='w-screen'>
                            <div className='flex py-3 px-4 justify-between'>
                                <li><button onClick={openComponent} >Personal</button></li>
                                <FaCaretRight />
                            </div>
                            <hr className='text-black' />
                            <div className='flex py-3 px-4 justify-between'>
                                <li>Business</li>
                                <FaCaretRight />
                            </div>
                            <hr className='text-black' />
                            <div className='flex py-3 px-4 justify-between'>
                                <li>Company</li>
                                <FaCaretRight />
                            </div>
                            <hr className='text-black' />
                            <div className='flex py-3 px-4 justify-between'>
                                <li>Developers</li>
                            </div>
                            <hr className='text-black' />
                            <div className='flex py-3 px-4 justify-between'>
                                <li>Contact Us</li>
                            </div>
                            <hr className='text-black' />
                            <div className='flex py-3 px-4 justify-between'>
                                <li>Help</li>
                                <FaCaretRight />
                            </div>
                            <hr className='text-black' />
                        </ul>
                    </div>
                </div>
            )}

                {toggleComponent == 1 ? (
                
                <div className='relative group  flex items-center gap-2 '>
                        <PersonalView />
                        
                    </div>  
                
            ) : toggleComponent == 2 ?  (
                    <div className='relative group  flex items-center gap-2 '>
                        <BusinessView />

                    </div>      
                ) : toggleComponent == 3 ? (
                        <div className='relative group  flex items-center gap-2 '>
                             hello

                        </div> 
                    ) : toggleComponent == 4 ? (
                            <div className='relative group  flex items-center gap-2 '>
                                world

                            </div>
                        ) : (
                                <div className='relative group  flex items-center gap-2 '>
                                 no

                                </div>
            )

            }
        </>
    );
}

export default Header;
