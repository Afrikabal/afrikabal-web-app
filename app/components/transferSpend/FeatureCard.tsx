import React from 'react'
import { IoIosLink } from "react-icons/io";
import {  FaCreditCard, FaPaperPlane} from 'react-icons/fa';

function FeatureCard() {
    const features = [
        {
            icon: <FaCreditCard />, 
            title: "Withdraw cash for payments free of charge at over 3,000 ATMs."
        },
        {
            icon: < FaPaperPlane/>, 
            title: "Get 25 free transfers on the first day of every month."
        },
        {
            icon: <IoIosLink />, 
            title: "Send money free of charge without an account number."
        }
        
    ];
  return (
   
        <section className="bg-white py-10 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 text-center transition-transform hover:scale-105"
                    >
                        {/* Icon */}
                        <div className="icon-wrapper bg-green-100 text-lime-600 text-md p-1  w-fit h-fit rounded-full">
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <p className="text-gray-800 font-medium">{feature.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
  
}

export default FeatureCard
