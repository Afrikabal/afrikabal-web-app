import React from 'react'


function ComparisonTable() {
  return (
      <div className="flex flex-col bg-white items-center mt-10">
    
          <h1 className="text-2xl font-bold text-lime-600 mb-8">
              Choose the freedom you need.
          </h1>
          <div className="overflow-x-auto shadow-2xl">
              <table className="min-w-full bg-white shadow-md border rounded-lg">
                  <thead>
                      <tr className='border-b border-gray-300'>
                          <th className="px-6 py-6 text-left text-lg font-semibold text-lime-600"> </th>
                          <th className="px-6 py-6 text-left text-lg font-semibold text-lime-600">Other Banks</th>
                          <th className="px-6 py-6 text-left text-lg font-semibold text-lime-600">Afrikabal</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Transfer Fee</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> Up to ₦50 plus V.A.T.</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> 25 free transfers every month</td>
                      </tr>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Card Delivery</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> 😕</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> Yes</td>
                      </tr>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Card Maintenance Fee</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> Up to ₦50 per quarter</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> No</td>
                      </tr>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Alerts</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> Charge for SMS alerts</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> Free instant notifications</td>
                      </tr>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Annual Interest</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> 4%</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> Up to 15%</td>
                      </tr>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Bill Payment Fee</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> Up to ₦100 per bill</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> No</td>
                      </tr>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Instant Reversals</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> 😟</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> Yes</td>
                      </tr>
                      <tr className='border-b border-gray-300'>
                          <td className="px-6 py-6 text-left text-gray-700">Maintenance</td>
                          <td className="px-6 py-6 text-gray-700"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>–</span> Yes</td>
                          <td className="px-6 py-6 text-black"><span className='bg-green-100 text-lime-600 p-2 rounded-full'>✔</span> No</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default ComparisonTable
