import React from 'react'
import Header from '../components/Header'
import BodyContent from '../components/BodyContent';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>

) {
  return (
      <div className=' bg-white h-screen w-screen text-black' >
      <Header />
      <BodyContent/>
          {children}
      
    </div>
  )
}

export default layout
