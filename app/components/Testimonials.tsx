import React from 'react'
import Image from 'next/image';
const testimonials = [
    {
        text: 'I like the fact that kuda Microfinance Bank doesn’t only run a no-fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!',
        name: 'Adebambo Oyekan',
        avatar: '/images/profiles2.jpg'
    },
    {
        text: 'I highly recommend this app, it does what it says "The bank of the free". I have received my Kuda card.',
        name: 'Ifeanyichukwu Obaji',
        avatar: '/images/profile3.jpg'
    },
    {
        text: 'Well done to the guys at @afrikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Mu\'azu Muhammad Kudu',
        avatar: '/images/profile4.jpg'
    },
    {
        text: 'Well done to the guys at @afikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Mu\'azu Muhammad Kudu',
        avatar: '/images/profile6.jpg'
    },
    {
        text: 'Well done to the guys at @afrikabalbank had a dispensing error on Friday night... and my money is back in my account!',
        name: 'Mu\'azu Muhammad Kudu',
        avatar: '/images/profile7.jpg'
    }
    
];

function Testimonials() {
    const duplicatedTestimonials = [...testimonials, ...testimonials];
  return (
      <div className="overflow-hidden">
          <div className="flex animate-slide">
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
                              <p className="font-bold">{testimonial.name}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Testimonials



 
