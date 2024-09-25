import React from 'react'
import Image from 'next/image';
import profile1 from '@/images/profile2.jpg'
import profile2 from '@/images/profile3.jpg'
import profile3 from '@/images/profile4.jpg'
import profile4 from '@/images/profile6.jpg'
import profile5 from '@/images/profile7.jpg'

const testimonials = [
    {
        text: 'Well done to the guys at @afrikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Adebambo Oyekan',
        avatar: profile1
    },
    {
        text: 'Well done to the guys at @afrikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Ifeanyichukwu Obaji',
        avatar: profile2
    },
    {
        text: 'Well done to the guys at @afrikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Mugisha Herve',
        avatar: profile3
    },
    {
        text: 'Well done to the guys at @afikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Rukundo Joseph',
        avatar: profile4
    },
    {
        text: 'Well done to the guys at @afrikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Umwari Denyse',
        avatar: profile5
    }
    
];

function Testimonials() {
    const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
      <div className="overflow-hidden">
          <div className='text-center py-10'>
              <h2 className='text-3xl font-bold text-lime-600 mb-6'>Don’t just take our word for it</h2>
          </div>
          <div className="flex animate-slide shadow-2xl">
              {duplicatedTestimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-64 p-4 bg-white shadow rounded mx-2">
                      <p className="text-gray-700">{testimonial.text}</p>
                      <div className="flex items-center mt-4">
                          <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                          />
                          <div className="ml-2">
                              <p className="font-bold text-black">{testimonial.name}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Testimonials



 
