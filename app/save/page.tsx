
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "../components/save/Loader";
import LandingLayout from "../components/save/LandingLayout";
import Header from "../components/save/Header";
import BodyContent from "../components/save/BodyContent";
import gif from '@/images/datasave.jpg'
import Footer from "../components/save/Footer";


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
                    title='Save more automatically.'
                    content='Saving money can be hard. We’ve been there. But there’s an easier way you’ll love. It begins with downloading Kuda.'
                    redirect={
                        <>
                            <a
                                href="/signup"
                                className="bg-lime-600 text-black px-6 py-3 rounded-full hover:bg-lime-800 transition"
                            >
                                Join Afrikabal
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

    )
}