"use client";  

import { IoIosNotifications } from "react-icons/io";
import Image from "next/image";
import Profile from '@/images/profile2.jpg';  
import { useRouter } from "next/navigation";  

const Header: React.FC = () => {
    const router = useRouter();  

    const handleProfileClick = () => {
        router.push("/account");  
    };

    return (
        <div className="flex justify-between items-center bg-white p-5 shadow-md">
            <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 p-2 rounded-md w-1/4 text-neutral-700"
            />
            <div className="flex items-center space-x-4">
                <button className="text-gray-500 bg-lime-100 rounded-full text-xl">
                    <IoIosNotifications />
                </button>
                <button onClick={handleProfileClick}>
                    <Image src={Profile} className="w-10 h-7 rounded-full" alt="Profile" />
                </button>
            </div>
        </div>
    );
};

export default Header;
