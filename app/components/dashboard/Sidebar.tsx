import { FaTachometerAlt, FaUsers, FaLifeRing } from 'react-icons/fa';
import Image from 'next/image';
import afrikabal from '@/images/afrikabal.png'
import { RiExchangeDollarFill, RiSecurePaymentFill } from 'react-icons/ri';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { CiMoneyBill } from 'react-icons/ci';

const Sidebar: React.FC = () => {
    return (
        <div className="w-fit bg-neutral-200 text-center flex items-center flex-col min-h-screen p-5 text-lime-600">
            <h2 className="flex items-center text-xl font-bold mb-6">
                
                <Image src={afrikabal}  alt='afrikabal-logo' className='min-w-10 h-10' />
                <span className='hidden ssm:block'>Afrikabal</span>
                </h2>
            <ul>
                <li className="mb-4 flex items-center space-x-3">
                    <FaTachometerAlt />
                    <a href="#" className="hover:text-gray-300 hidden ssm:block">Dashboard</a>
                </li>
                <li className="mb-4 flex items-center space-x-3">
                    <FaUsers />
                    <a href="#" className="hover:text-gray-300 hidden ssm:block">Accounts</a>
                </li>
                <li className="mb-4 flex items-center space-x-3">
                    <RiExchangeDollarFill />
                    <a href="#" className="hover:text-gray-300 hidden ssm:block">Transaction</a>
                </li>
                <li className="mb-4 flex items-center space-x-3">
                    <TbBrandGoogleAnalytics />
                    <a href="#" className="hover:text-gray-300 hidden ssm:block">Analytics</a>
                </li>
                <li className="mb-4 flex items-center space-x-3">
                    <CiMoneyBill />
                    <a href="#" className="hover:text-gray-300 hidden ssm:block">Billings</a>
                </li>
                <li className="mb-4 flex items-center space-x-3">
                    <FaLifeRing />
                    <a href="#" className="hover:text-gray-300 text-nowrap hidden ssm:block">Financial reports</a>
                </li>
                <li className="mb-4 flex items-center space-x-3">
                    <RiSecurePaymentFill />
                    <a href="#" className="hover:text-gray-300 text-nowrap hidden ssm:block">Payments methods</a>
                </li>
            </ul>
            {/* <p>EXTRA</p>
            <ul>
                <li className="mb-4 flex items-center space-x-3 ">Support</li>
                <li className="mb-4 flex items-center space-x-3">Settings</li>
            </ul> */}
        </div>
    );
};

export default Sidebar;
