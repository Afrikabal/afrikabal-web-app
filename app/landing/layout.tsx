import React from 'react'
import Header from '../components/Header'

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>

) {
  return (
      <div className=' bg-white h-screen w-screen text-black' >
          <Header />
          {children}
      
    </div>
  )
}

export default layout
