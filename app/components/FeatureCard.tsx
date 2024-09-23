import React from 'react'
import { BiSolidPieChart } from "react-icons/bi";
import {  FaCreditCard, FaSitemap, FaPiggyBank, FaPaperPlane} from 'react-icons/fa';

function FeatureCard() {
    const features = [
        {
            icon: <FaCreditCard />, 
            title: "Order an Afrikabal Visa card on the app with pickup and delivery options."
        },
        {
            icon: < BiSolidPieChart/>, 
            title: "Enjoy cashless payment options online and offline."
        },
        {
            icon: <FaSitemap />, 
            title: "Pay your essential bills and buy gift cards easily."
        },
        {
            icon: <FaPaperPlane />,
            title: "Get 25 free transfers to Nigerian banks every month."
        },
        {
            icon: <FaPiggyBank />, 
            title: "Save money automatically any time you spend."
        },
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
