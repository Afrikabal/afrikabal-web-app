import React from 'react'
import FeatureCard from './FeatureCard'
import DebitBanner from './DebitBanner'
import ManagementBanner from './ManagementBanner'
import SaveMoneyBanner from './SaveMoneyBanner'
import SafetyBanner from './SafetyBanner'

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
                  
                        {props.content}
              </p>

              
              <div className="flex justify-center md:justify-start gap-4 mb-8">
                  
                  
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
                 
                        {props.image}
              </div>
          </div>
            </section>

            <FeatureCard />
            <DebitBanner />
            <ManagementBanner />
            <SaveMoneyBanner />
            <SafetyBanner />
            {/* <HelpBanner /> */} 
            {/* <FeesBanner />
            <div className="min-h-screen flex items-center justify-center">
                <Testimonials />
            </div>
            <Partners />
            <ComparisonTable /> */}
            <More />
            <Join />
            </>
  )
}

export default BodyContent
