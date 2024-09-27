import React from 'react'
import { IoCaretBack } from "react-icons/io5";
import { useRouter } from 'next/router';

function HeaderBack() {

    const router = useRouter();

  return (
    
          <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
              <IoCaretBack className="h-5 w-5" /> 
              <span>Back</span>
          </button>
    
  )
}

export default HeaderBack
