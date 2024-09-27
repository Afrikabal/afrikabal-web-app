import React from 'react';
import gif from '@/images/harvest.png';
import Image from 'next/image';
import AppStore from '@/images/app_store.png'
import GooglePlay from '@/images/googleplay-removebg-preview.png'

function Join() {
    return (
        <div className="bg-lime-50 py-12 px-20 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 gap-20 bg-white rounded-lg shadow-lg overflow-hidden">

                {/* Left Section: Text */}
                <div className="md:w-1/2 p-8">
                    <h2 className="text-4xl font-bold text-lime-600 mb-4">
                        The agritech app for Africans.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Save, spend, send, and invest money across borders.
                    </p>
                    <div className='flex justify-center md:justify-start gap-4 mb-8'>
                    <a
                        href="https://apps.apple.com/app/kuda-bank/id1483960795"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <Image src={AppStore} alt='app store' className='w-40 h-40' />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.kuda.android"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <Image src={GooglePlay} alt='google play' className='w-40 h-40' />
                        </a>
                    </div>
                    <div className="text-gray-600">
                        <p className="text-sm">
                            Fully Licensed by the CBN &bull; Deposits Insured by NDIC
                        </p>
                    </div>
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
