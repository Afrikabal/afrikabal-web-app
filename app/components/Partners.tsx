import React from 'react'
import Image from 'next/image'
import Techcrunch from '@/images/techcrunch.png'
import Weforum from '@/images/world-economic-forum7566.jpg'
import FintechFeatures from '@/images/Fintech-Futures.png'
import Bbc from '@/images/BBC-Logo.png'
import Cnbc from '@/images/CNBC-Africa-Logo.png'
import Euromoney from '@/images/download.jpeg'
import Valar from '@/images/Vilar.jpg'
import Entreecap from '@/images/capital.png'
import Sbi from '@/images/SBI.png'
import Target from '@/images/targetglobal.jpg'
import Visa from '@/images/Visa-logo-02.png'


function Partners() {
  return (
      <div className="bg-white py-12">
          <div className="container mx-auto  ">
              <div className="text-center">
                  <h2 className="text-2xl font-bold text-lime-600">Our Partners</h2>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-center items-center py-8">
                  <a href="https://techcrunch.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Techcrunch}
                          alt="TechCrunch"
                          className="mx-auto w-24 h-auto "
                      />
                  </a>
                  <a href="https://www.weforum.org" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Weforum}
                          alt="World Economic Forum"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://www.fintechfutures.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={FintechFeatures}
                          alt="Fintech Futures"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://www.bbc.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Bbc}
                          alt="BBC"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://www.cnbcafrica.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Cnbc}
                          alt="CNBC Africa"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://www.euromoney.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Euromoney}
                          alt="Euromoney"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center py-8">
                  <a href="https://valar.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Valar}
                          alt="Valar"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://entreecap.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Entreecap}
                          alt="Entree Capital"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://www.sbigroup.co.jp/english/" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Sbi}
                          alt="SBI Holdings"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://www.targetglobal.vc" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Target}
                          alt="Target Global"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
                  <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
                      <Image
                          src={Visa}
                          alt="VISA"
                          className="mx-auto w-24 h-auto hover:text-neutral-500"
                      />
                  </a>
              </div>
          </div>
      </div>
  )
}

export default Partners
