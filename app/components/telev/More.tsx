import React from 'react'
import { TbMoneybag } from 'react-icons/tb'
import {  FaPhone, FaWifi } from 'react-icons/fa'


function More() {
  return (
      <div className="py-10 px-20 bg-white">
          <h2 className="text-3xl font-bold text-center text-lime-600 mb-10">More for you</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

              <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-purple-100 p-3 inline-block rounded-full mb-4">
                      <span className="w-6 h-6 text-lime-600">
                          <FaWifi />
                      </span>
                  </div>
                  <h3 className="text-xl font-semibold text-lime-600">Internet</h3>
                  <p className="text-gray-600 mt-2">
                      Send money for free to any Nigerian account with 25 free transfers every month.
                  </p>
                  <a href="#" className="text-lime-600 hover:underline mt-4 block">Learn more →</a>
              </div>

              <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-purple-100 p-3 inline-block rounded-full mb-4">
                      <span className="w-6 h-6 text-lime-600">
                          <FaPhone />
                      </span>
                  </div>
                  <h3 className="text-xl font-semibold text-lime-600">Airtime</h3>
                  <p className="text-gray-600 mt-2">
                      Get a physical or virtual Kuda card for easy online and offline payments.
                  </p>
                  <a href="#" className="text-lime-600 hover:underline mt-4 block">Learn more →</a>
              </div>

              <div className="bg-white border rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-purple-100 p-3 inline-block rounded-full mb-4">
                      <span className="w-6 h-6 text-lime-600">
                          <TbMoneybag />
                      </span>
                  </div>
                  <h3 className="text-xl font-semibold text-lime-600">Loans</h3>
                  <p className="text-gray-600 mt-2">
                      Get up to ₦150,000 in your Afrikabal account easily and repay in convenient installments.
                  </p>
                  <a href="#" className="text-lime-600 hover:underline mt-4 block">Learn more →</a>
              </div>
          </div>
      </div>
  )
}

export default More
