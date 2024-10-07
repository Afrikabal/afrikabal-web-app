"use client";

import router from "next/router";


const AccountDetails: React.FC = () => {
    const handleSignOut = () => {
        
        console.log("Signing out...");
        
        router.push("/login"); 
    };
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">View Profile</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Statement & Reports</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Saved Cards</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Get Help</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Linked Accounts</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Account Limits</button>
            </div>
            <div className="space-y-4">
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Security</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Legal</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">FAQs</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Chat With Us</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Hide Balance</button>
                <button className="bg-gray-100 p-3 w-full text-left text-neutral-600 shadow-lg">Dark Mode</button>
            </div>

            <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded justify-center"
            >
                Sign Out
            </button>
        </div>
    );
};

export default AccountDetails;
