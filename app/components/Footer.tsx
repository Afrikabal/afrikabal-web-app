import React from 'react'
import Afrikabal from '@/images/afrikabal.png'
import AppStore from '@/images/app_store.png'
import Googleplay from '@/images/googleplay-removebg-preview.png'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaMedium, FaTwitter, FaYoutube, FaGlobe} from 'react-icons/fa'

function Footer() {
  return (
      <footer className="bg-white text-gray-800 py-12 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                  
                  <div className="md:col-span-1">
                      <Image
                          src={Afrikabal}
                          alt="Afrikabal Logo"
                          className="h-12 w-16 mb-4"
                      />
                  </div>

                  
                  <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                          <h3 className="text-lg font-semibold text-lime-600">Personal</h3>
                          <ul>
                              <li><a href="#" className="hover:text-lime-600">Discover Personal</a></li>
                              <li><a href="#" className="hover:text-lime-600">Transfer & Spend</a></li>
                              <li><a href="#" className="hover:text-lime-600">Save</a></li>
                              <li><a href="#" className="hover:text-lime-600">Investments</a></li>
                              <li><a href="#" className="hover:text-lime-600">Kuda card</a></li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold text-lime-600">Business</h3>
                          <ul>
                              <li><a href="#" className="hover:text-lime-600">Disc  over Business</a></li>
                              <li><a href="#" className="hover:text-lime-600">Business Registration</a></li>
                              <li><a href="#" className="hover:text-lime-600">softPOS</a></li>
                              <li><a href="#" className="hover:text-lime-600">Invoicing</a></li>
                              <li><a href="#" className="hover:text-lime-600">Salary Loan</a></li>
                              <li><a href="#" className="hover:text-lime-600">Business API</a></li>
                              <li><a href="#" className="hover:text-lime-600">Join Kuda Business</a></li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold text-lime-600">Company</h3>
                          <ul>
                              <li><a href="#" className="hover:text-lime-600">Blog</a></li>
                              <li><a href="#" className="hover:text-lime-600">Press</a></li>
                              <li><a href="#" className="hover:text-lime-600">Join Our Team</a></li>
                              <li><a href="#" className="hover:text-lime-600">About Us</a></li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold text-lime-600">Help</h3>
                          <ul>
                              <li><a href="#" className="hover:text-lime-600">Get Help</a></li>
                              <li><a href="#" className="hover:text-lime-600">Scam Awareness</a></li>
                              <li><a href="#" className="hover:text-lime-600">FAQs</a></li>
                              <li><a href="#" className="hover:text-lime-600">Security</a></li>
                              <li><a href="#" className="hover:text-lime-600">Contact Us</a></li>
                              <li><a href="#" className="hover:text-lime-600">Self Help</a></li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="text-lg font-semibold text-lime-600">Transparency</h3>
                          <ul>
                              <li><a href="#" className="hover:text-lime-600">Terms & Conditions</a></li>
                              <li><a href="#" className="hover:text-lime-600">Privacy Policy</a></li>
                              <li><a href="#" className="hover:text-lime-600">Information Security Policy</a></li>
                              <li><a href="#" className="hover:text-lime-600">Cookie Policy</a></li>
                              <li><a href="#" className="hover:text-lime-600">Whistleblowing Policy</a></li>
                          </ul>
                      </div>
                  </div>
              </div>

            
              <div className="flex justify-center space-x-4 items-center mb-3">
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                      <Image src={AppStore} alt="App Store" className="h-40 w-40" />
                  </a>
                  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                      <Image src={Googleplay} alt="App Store" className="h-40 w-40" />
                  </a>
                  <a href="/login" target="_blank" className='bg-lime-600 rounded-md p-2 gap-2 flex flex-row h-fit items-center ' rel="noopener noreferrer" >
                      {/* <Image src={AppStore} alt="App Store" className="h-40 w-40" /> */}
                      <span>
                          <FaGlobe size={26} />
                      </span>
                      <div className='text-xs' >
                          <h4>Sign in to Afrikabal</h4>
                          <h4>On The Web</h4>
                      </div>
                  </a>
              </div>

             
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">

                  
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">Contact</h3>
                      <p className="text-gray-600">
                          <a href="mailto:help@afrikabal.org" className="text-lime-600 hover:underline">help@afrikabal.org</a>
                      </p>

                      <div className="flex justify-center md:justify-start space-x-4 mt-4">
                          <a href="http://x.com" className="text-gray-600 hover:text-lime-600">
                              <FaTwitter className="h-6 w-6" />
                          </a>
                          <a href="http://instagram.com" className="text-gray-600 hover:text-lime-600">
                              <FaInstagram className="h-6 w-6" />
                          </a>
                          <a href="http://facebook.com" className="text-gray-600 hover:text-lime-600">
                              <FaFacebook className="h-6 w-6" />
                          </a>
                          <a href="http://youtube.com" className="text-gray-600 hover:text-lime-600">
                              <FaYoutube className="h-6 w-6" />
                          </a>
                          <a href="http://medium.com" className="text-gray-600 hover:text-lime-600">
                              <FaMedium className="h-6 w-6" />
                          </a>
                          <a href="http://linkedin.com" className="text-gray-600 hover:text-lime-600">
                              <FaLinkedin className="h-6 w-6" />
                          </a>
                      </div>
                  </div>

                 
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">Lagos</h3>
                      <p className="text-gray-600">1-11 Commercial Avenue,<br />Yaba, Lagos, Nigeria</p>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">London</h3>
                      <p className="text-gray-600">5 New Street Square,<br />London, EC4A 3TW, UK</p>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">Cape Town</h3>
                      <p className="text-gray-600">146 Campground Road,<br />Newlands, Cape Town</p>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">Canada</h3>
                      <p className="text-gray-600">3080 Yonge Street, Suite 6060,<br />Toronto, Ontario M4N 3N1</p>
                  </div>
              </div>

              
              <hr className="my-8 border-gray-300" />

              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">About Afrikabal</h3>
                      <p className="text-gray-600">
                          Afrikabal is a leading digital bank with offices in multiple regions, providing seamless banking experiences tailored to its users&apos; needs.
                      </p>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">Legal Information</h3>
                      <p className="text-gray-600">
                          © 2024 Afrikabal Technologies Ltd (Company No.11472232). All rights reserved.
                      </p>
                      <p className="text-gray-600 mt-2">
                          UK services are offered by Afrikabal EMI Ltd (Company No. 13724208). Canadian services by Afrikabal Canada Technologies Limited.
                      </p>
                  </div>
                  <div>
                      <h3 className="text-lg font-semibold text-lime-600">Licenses & Registration</h3>
                      <p className="text-gray-600">
                          Nigerian services are licensed by the Central Bank of Nigeria (CBN) and insured by the Nigerian Deposit Insurance Corporation (NDIC).
                      </p>
                      <p className="text-gray-600 mt-2">
                          Canadian operations are duly registered under FINTRAC (M23163015).
                      </p>
                  </div>
              </div>

              
              <div className="mt-8 border-t pt-8 text-center text-xs text-gray-500">
                  <p>
                      If you have any inquiries, feel free to reach us via the <a href="mailto:help@kuda.com" className="text-lime-600 hover:underline">help@afrikabal.org</a> email.
                  </p>
              </div>
          </div>
      </footer>
  )
}

export default Footer
