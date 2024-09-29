"use client";

import { useEffect, useState } from "react";
import Loader from "../components/internet/Loader";
import LandingLayout from "../components/internet/LandingLayout";
import Header from "../components/internet/Header";
import Image from "next/image";
import BodyContent from "../components/internet/BodyContent";
import Footer from "../components/internet/Footer";
import AppStore from '@/images/app_store.png'
import GooglePlay from '@/images/googleplay-removebg-preview.png'
import gif from '@/images/wifi.jpg'

export default function Home() {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <LandingLayout>
            <div className='bg-white h-screen w-screen overflow-x-hidden text-black font-pacifico'>
                <Header />
                <BodyContent
                    title='Buy internet data and subscribe to data plans easily on the Afirkabal app.'
                    content='Top up your mobile data quickly and get dozens of internet plans for phones, modems and routers any time.'
                    redirect={
                        <>
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
                        </>
                    }
                    image={
                        <Image
                            src={gif}
                            alt="afrikabal Card"
                            width={500}
                            height={700}
                            className="rounded-lg"
                        />
                    }
                />
                <Footer />
            </div>
        </LandingLayout>
    );
}