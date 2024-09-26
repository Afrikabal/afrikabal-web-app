import React from 'react';
import gif from '@/images/harvest.png';
import Image from 'next/image';

function Join() {
    return (
        <div className="bg-lime-50 py-16 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 gap-20 bg-white rounded-lg shadow-lg overflow-hidden">

                {/* Left Section: Text */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-4xl font-bold text-lime-600 mb-4">
                        The agritech app for Africans.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Save, spend, send, and invest money across borders.
                    </p>
                    <a
                        href="/signup"
                        className="bg-lime-600 text-black px-6 py-3 rounded-full hover:bg-lime-800 transition"
                    >
                        Join Afrikabal
                    </a>
                </div>

                {/* Right Section: Image */}
                <div className="md:w-1/2 p-8 flex justify-center relative">
                    {/* Main image */}
                    <Image
                        src={gif}
                        alt="Money app for Africans"
                        className="w-full h-auto"
                    />
                    {/* Decorative icons (mimicking what I saw in the reference image) */}
                    
                </div>

            </div>
        </div>
    );
}

export default Join;
