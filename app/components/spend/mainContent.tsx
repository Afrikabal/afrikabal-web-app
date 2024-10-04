import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Link from 'next/link';

export default function MainContent() {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }
    return (
        <main className="p-6 lg:mx-40 mt-20  min-h-screen">
            
            <section className="bg-white shadow rounded-lg p-6 mb-6 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="text-4xl text-purple-600">🌐</div>
                    <div>
                        <p className="text-gray-500">Account Balance</p>
                        <h2 className="text-2xl font-bold">₦0.00</h2>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-gray-200 text-lime-600 px-4 py-2 rounded">Convert</button>
                    <button className="bg-gray-200 text-lime-600 px-4 py-2 rounded">Add Money</button>
                    <button className='bg-gray-200 text-lime-600 px-4 py-2 rounded'>Spend</button>
                </div>
            </section>

            <section className="space-y-4 ">
                <Link href={"/signup"} className='bg-sky-50 p-2 items-center flex gap-4 flex-row shadow-lg rounded-lg'>
                    <div className=" h-fit bg-white p-3 text-lime-600 font-semibold rounded-full border-[3px] border-lime-600">
                        1/3
                    </div>
                    <div>
                <h3 className="text-sm font-semibold  text-lime-600">Complete Account Set Up</h3>
                    <p className="text-neutral-700 text-sm ">Please, complete your profile setup to remove the limits on your account.</p>
               </div>
                    </Link>

                
                    
                    <div className="flex p-3 bg-white justify-between items-center shadow-lg">
                        <div className="flex items-center space-x-4">
                            <div className="bg-green-100 p-2 rounded-full">📄</div>
                            <span className="text-gray-700">Verify Identity</span>
                        </div>
                    <button onClick={toggleShow} className={` ${show ? ' bg-lime-600' : 'bg-red-500' } text-white px-4 py-2 rounded`}>
                         
                        
                       {show ? "Complete" : "Incomplete" }
                    </button>
                    </div>

                    
                < button disabled={!show}  className={`flex p-3  ${show ? 'blur-0' : 'blur-[1px]'   }  bg-white w-full justify-between items-center shadow-lg`}>
                        <div className="flex items-center space-x-4">
                            <div className="bg-yellow-100 p-2 rounded-full">🔒</div>
                            <span className="text-gray-700">Secure Your Account</span>
                        </div>
                    <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
                        
                        {show ? 'Incomplete' : <IoMdCloseCircleOutline /> }
                    
                    </button>
                    </button>
             
            </section>

            
            <div className="fixed bottom-6 right-6 bg-lime-600 text-white p-4 rounded-full shadow-lg">
                💬
            </div>
        </main>
    );
}
