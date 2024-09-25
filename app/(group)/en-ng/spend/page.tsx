import BodyContent from '@/app/components/BodyContent'
import Button from '@/app/components/Button'
import React from 'react'
import Image from 'next/image'
import FreePay from '@/images/freepay.jpg'
import Footer from '@/app/components/Footer'

function Spend() {
  return (
    <div>
          <BodyContent title='Send money for free anytime.' content='Your Afrikabal account comes with 25 free transfers to other banks every month. That’s up to 15,000 naira saved on transfers every year.' redirect=<Button /> image=<Image
              src={FreePay}
              alt="afrikabal Card"
              width={500}
              height={700}
              className="rounded-lg"
          /> />
          <Footer />
    </div>
  )
}

export default Spend
