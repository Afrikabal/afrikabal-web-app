import React from 'react'
import DebitBanner from './DebitBanner'
import FeatureCard from './FeatureCard'
import ManagementBanner from './ManagementBanner'
import SaveMoneyBanner from './SaveMoneyBanner'

import More from './More'
import Join from './Join'


function BodyContent(props) {
    return (
      <>
      <section className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-4 md:px-16">
          
          <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-lime-600 mb-4">
                        {/* The Agritech App for Africans. */}
                        { props.title}
              </h1>
              <p className="text-lg mb-6 text-gray-700">
                  {/* Make free transfers, enjoy cashless payment options and earn interest
                  on your savings with Afrikabal. */}
                        {props.content}
              </p>

              
              <div className="flex justify-center md:justify-start gap-4 mb-8">
                  
                  {/* <a
                      href="https://apps.apple.com/app/kuda-bank/id1483960795" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white flex items-center px-4 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition"
                  >
                      
                      <span className="text-sm">Download on the App Store</span>
                  </a>

               
                  <a
                      href="https://play.google.com/store/apps/details?id=com.kuda.android" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lime-600 text-neutral-700 flex items-center px-4 py-2 rounded-lg shadow-lg hover:bg-lime-400 transition"
                  >
                     
                      <span className="text-sm">Get it on Google Play</span>
                  </a> */}
                        {props.redirect}
              </div>

              <div className="text-gray-600">
                  <p className="text-sm">
                      Fully Licensed by the CBN &bull; Deposits Insured by NDIC
                  </p>
              </div>
          </div>

          
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="relative">
                 
                  {/* <Image
                      src={gif} 
                      alt="afrikabal Card"
                      width={500}
                      height={700}
                      className="rounded-lg"
                  /> */}
                        {props.image}
              </div>
          </div>
            </section>

            <FeatureCard />
            <DebitBanner />
            <ManagementBanner />
            <SaveMoneyBanner />
            
            <More />
            <Join />
            </>
  )
}

export default BodyContent
