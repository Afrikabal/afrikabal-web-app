"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import afrikabal from '@/images/afrikabal.png';
import Button from './Button';
import { FaBars, FaCaretDown, FaCaretRight } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import Personal from './Personal';
import Business from './Business';
import Company from './Company';
import Help from './Help';
import PersonalView from './PersonalView';
import BusinessView from './BusinessView';
import CompanyView from './CompanyView';
import HelpView from './HelpView';
import { IoIosArrowBack } from "react-icons/io";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [toggleComponent, setToggleComponent] = useState<number>(0);

    const headerToggle = () => {
        setToggle((prev) => !prev);
        setToggleComponent(0);
    };

    return (
        <>
            <div className='flex justify-between text-sm px-12 p-3 shadow-md text-lime-600 items-center font-muli fixed top-0 w-full z-50 bg-white'>
                <div className='flex gap-20 items-center'>
                    <Image src={afrikabal} alt="Afrikabal Logo" width={60} height={60} />
                    <div className='hidden rs:flex gap-10'>
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
                            <div className='relative group flex items-center gap-2'>
                                <li className='cursor-pointer'>Help</li>
                                <FaCaretDown />
                                <Help />
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='hidden rs:flex items-center gap-7'>
                    <Link href={"/login"}>Sign In</Link>
                    <Button />
                </div>

                <span className='rs:hidden text-black'>
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
            <div className='h-[80px]' />
            {toggle && toggleComponent === 0 && (
                <div className='rs:hidden w-screen my-5'>
                    <div className='flex gap-7'>
                        <Button />
                        <button className='p-2 px-8 text-sm bg-green-100 rounded-xl font-bold text-lime-600 w-fit hover:translate-y-[-5px]'>
                            <a href="/login">Sign In</a>
                        </button>
                    </div>
                    <div className='w-screen text-lime-600'>
                        <ul className='w-screen'>
                            <div className='flex py-3 px-4 justify-between'>
                                <li><button onClick={() => setToggleComponent(1)}>Personal</button></li>
                                <FaCaretRight />
                            </div>
                            <hr className='text-black' />
                            <div className='flex py-3 px-4 justify-between'>
                                <button onClick={() => setToggleComponent(2)}>Business</button>
                                <FaCaretRight />
                            </div>
                            <hr className='text-black' />
                            <div className='flex py-3 px-4 justify-between'>
                                <button onClick={() => setToggleComponent(3)}>Company</button>
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
                                <button onClick={() => setToggleComponent(4)}>Help</button>
                                <FaCaretRight />
                            </div>
                            <hr className='text-black' />
                        </ul>
                    </div>
                </div>
            )}
            <>
                {toggleComponent === 1 && (
                    <div className='relative group flex items-center gap-2'>
                        <button onClick={() => setToggleComponent(0)} className='my-2 w-full bg-white text-start p-2 rounded-sm hover:text-lime-600 ml-4 text-lime-600 text-sm z-10'>
                            <IoIosArrowBack className='inline mr-3' /> back
                        </button>
                        <PersonalView />
                    </div>
                )}
                {toggleComponent === 2 && (
                    <div className='relative group flex items-center gap-2'>
                        <button onClick={() => setToggleComponent(0)} className='my-2 w-full bg-white text-start p-2 rounded-sm hover:text-lime-600 ml-4 text-lime-600 text-sm z-10'>
                            <IoIosArrowBack className='inline mr-3' /> back
                        </button>
                        <BusinessView />
                    </div>
                )}
                {toggleComponent === 3 && (
                    <div className='relative group flex items-center gap-2'>
                        <button onClick={() => setToggleComponent(0)} className='my-2 w-full bg-white text-start p-2 rounded-sm hover:text-lime-600 ml-4 text-lime-600 text-sm z-10'>
                            <IoIosArrowBack className='inline mr-3' /> back
                        </button>
                        <CompanyView />
                    </div>
                )}
                {toggleComponent === 4 && (
                    <div className='relative group flex items-center gap-2'>
                        <button onClick={() => setToggleComponent(0)} className='my-2 w-full bg-white text-start p-2 rounded-sm hover:text-lime-600 ml-4 text-lime-600 text-sm z-10'>
                            <IoIosArrowBack className='inline mr-3' /> back
                        </button>
                        <HelpView />
                    </div>
                )}
            </>
        </>
    );
}

export default Header;
