import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'
import { FaLock } from 'react-icons/fa6'

const Login = () => {
  return (
    <div>
      <div className='w-full fixed left-0 top-0'>
              <Header/>
          </div>
          <div className='flex flex-column mt-5 mr-5 w-1/3 h-1/3 shadow-emerald-200 shadow-md'>
              <div className='w-full h-1/3 border border-transparent rounded-full bg-green-200'>
                  <span className='mr-3 text-green-500'>
                      <FaLock />
                  </span>
                  <p>Please check that you are visiting the correct URL</p>
                  <Link href='/login' className='text-green-500 font-bold text-sm'>https://app.afrikabal.com</Link>
              </div>
              <div className='w-full mt-3'>
          
              </div>
          </div>
    </div>
  )
}

export default Login
