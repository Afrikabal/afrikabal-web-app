
import AccountDetails from "../components/dashboard/AccountDetails";
import Header from '../components/spend/header'




export default function Home() {
    
    return (
        <div className="">
            <Header />
            
        <div className="min-h-screen overflow-auto flex justify-center items-center bg-gray-100">
            <div className="bg-white mt-10 overflow-auto p-8 shadow-lg rounded-md max-w-4xl w-full">
                    <h1 className="text-2xl font-bold text-center mb-6 text-lime-600">Account</h1>
                    
                <AccountDetails />
                
            </div>
            </div>
        </div>
    )
}