import React from 'react'



function LandingLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  

  return (
    <div>
      { children}
   </div>
  )
}

export default LandingLayout
 
