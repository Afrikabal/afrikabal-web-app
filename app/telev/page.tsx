"use client";

import Image from "next/image";
import AppStore from '@/images/app_store.png'
import GooglePlay from '@/images/googleplay-removebg-preview.png'
import { useEffect, useState } from "react";
import Loader from "../components/telev/Loader";
import LandingLayout from "../components/telev/LandingLayout";
import Header from "../components/telev/Header";
import BodyContent from "../components/telev/BodyContent";
import Footer from "../components/telev/Footer";
import gif from '@/images/sub.jpg'

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
                    title='Pay your TV subscriptions easily on the Afrikabal app!'
                    content='Kuda secures your entertainment with convenient DStv, Showmax, GOtv and StarTimes payments.'
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