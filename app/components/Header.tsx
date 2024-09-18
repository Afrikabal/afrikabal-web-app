"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import afrikabal from '@/images/afrikabal.png';
import Button from './Button';
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { FaCaretRight } from 'react-icons/fa';
import { FaCaretDown } from "react-icons/fa";

function Header() {
    const [toggle, setToggle] = useState(false);

    const headerToggle = () => {
        setToggle(prev => !prev);
    };

    return (
        <>
            <div className='flex justify-between text-sm px-12 p-3 shadow-md text-green-600 items-center'>
                <div className='flex gap-20 items-center'>
                    <Image src={afrikabal} alt="Afrikabal Logo" width={60} height={60} />
                    <div className='hidden md:flex gap-10'>
                        <ul className='flex gap-10'>
                            <div className='flex items-center gap-2'>
                                <li>Personal</li>
                                <FaCaretDown />
                            </div>
                            <div className='flex items-center gap-2'>
                                <li>Business</li>
                                <FaCaretDown />
                            </div>
                            <div className='flex items-center gap-2'>
                                <li>Company</li>
                                <FaCaretDown />
                            </div>
                            <div className='flex items-center gap-2'>
                                <li>Help</li>
                                <FaCaretDown />
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
            {toggle && (
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
                                <li>Personal</li>
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
        </>
    );
}

export default Header;
