
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "../components/salary-loan/Loader";
import LandingLayout from "../components/salary-loan/LandingLayout";
import Header from "../components/salary-loan/Header";
import BodyContent from "../components/salary-loan/BodyContent";
import Footer from "../components/salary-loan/Footer";
import AppStore from '@/images/app_store.png'
import GooglePlay from '@/images/googleplay-removebg-preview.png'
import gif from '@/images/bank.jpg'
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
                    title='Choose Afrikabal and leave cash behind for good.'
                    content='Enjoy your cashless life with easy payment options on the Afrikabal app!'
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