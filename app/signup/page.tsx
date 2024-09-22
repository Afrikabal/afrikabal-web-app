"use client"
import React, { useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image'
import Afrikabal from '@/images/afrikabal.png'

const Signup = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const [showPassword, setShowPassword] = useState(false);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Form Submitted', { email, password });
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="bg-white h-screen relative">
      <div className='fixed top-0 left 0 shadow-md w-full h-16 px-6 py-2'>
        <Link href='/landing'>
          <Image alt="Afrikabal logo" src={Afrikabal} width={60} height={60} />
        </Link>
      </div>

      <div className='w-1/3 h-12 bg-green-50 absolute left-24 top-20 rounded-md text-xs'>
        <div className='text-green-600 px-6'>
          <div className=''>
            <FaLock />
          </div>
          <div className='flex flex-col justify-normal mx-6'>
            <p className=''>Please check that you are visiting the correct URL</p>
            <Link href="/login" className='font-extrabold'>https://app.afrikabal.com</Link>
          </div>
        </div>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className='flex flex-col md:flex-wrap justify-between absolute left-24 top-32 px-6 py-12 bg-white rounded-md w-1/3 border border-black/10 shadow-md mt-3'
      >
        <div className='my-2'>
          <p className='text-green-600 relative flex flex-row '>
            <MdOutlineArrowBackIos className='m-1 h-3 w-3' /><span className='mb-2 text-sm'>Back</span>
          </p>
          <p className='text-black font-semibold text-lg'>Email & Password</p>
          <p className='text-black/50 font-light text-xs text-left w-72 my-2 md:block'>Create a profile with a few details. Your password must have at least 8 characters including letters and a number.</p>
        </div>

        <div className='flex flex-col my-3'>
          <label className='text-black/80 font-light text-sm'>Email Address</label>
          <input 
            type="email"
            placeholder='example@gmail.com'
            className='bg-white/70 text-black/80 shadow-md rounded-sm text-xs font-light py-2 px-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div className='flex flex-col my-3'>
          <label className='text-black/80 font-light text-sm'>Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder='.............'
            className='bg-white/70 text-black/80 shadow-md rounded-sm text-base font-semibold py-2 px-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          {
            showPassword ? 
              <FaEye className='absolute bottom-48 mb-4 right-12 text-black/50 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
            : 
              <IoMdEyeOff className='absolute bottom-48 mb-4 right-12 text-black/50 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
          }
        </div>

        <div className='flex flex-col my-3 relative'>
          <label className='text-black/80 font-light text-sm'>Confirm Password</label>
          <input 
            type={showPassword ? 'text' : 'password'}
            placeholder='.............'
            className='bg-white/70 text-black/80 shadow-md rounded-sm text-base font-semibold py-2 px-4'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          {
            showPassword ? 
              <FaEye className='absolute bottom-0 mb-3 right-6 text-black/50 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
            : 
              <IoMdEyeOff className='absolute bottom-0 mb-3 right-6 text-black/50 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
          }
        </div>

        <button type="submit" className='bg-green-600 rounded-md text-white text-sm font-semibold my-3 text-center py-1 w-1/3'>
          Next
        </button>
      </form>
    </div>
  )
}

export default Signup;
