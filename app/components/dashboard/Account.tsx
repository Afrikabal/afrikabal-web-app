import AccountDetails from "./AccountDetails";




const Account: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-md max-w-4xl w-full">
                <h1 className="text-2xl font-bold text-center mb-6">Account</h1>

                <AccountDetails />
            </div>
        </div>
    );
};

export default Account;
