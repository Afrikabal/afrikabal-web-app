"use client";
import { useEffect, useState } from "react";
import Loader from "../components/electricity/Loader";
import LandingLayout from "../components/electricity/LandingLayout";
import Header from "../components/electricity/Header";
import BodyContent from "../components/electricity/BodyContent";
import Image from "next/image";
import AppStore from '@/images/app_store.png'
import GooglePlay from '@/images/googleplay-removebg-preview.png'
import Footer from "../components/electricity/Footer";
import gif from '@/images/electricity.png'

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
            <div className='bg-white h-screen w-screen overflow-x-hidden text-black font-poppins'>
                <Header />
                <BodyContent
                    title='Recharge your prepaid electricity meter any time on the Kuda app.'
                    content='Meter top-ups are super-convenient on Kuda. Buy units in seconds and get your token by email.'
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