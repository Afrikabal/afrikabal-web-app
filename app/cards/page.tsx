"use client";
import { useState, useEffect } from "react";
import Loader from "../components/cards/Loader";
import LandingLayout from "../components/cards/LandingLayout";
import Header from "../components/cards/Header";
import BodyContent from "../components/cards/BodyContent";
import Image from "next/image";
import Footer from "../components/cards/Footer";
import gif from '@/images/card.png'


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
                    title='The money app for Africans.'
                    content='Make free transfers, enjoy cashless payment options and earn interest on your savings with Afrikabal.'
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
    );
}