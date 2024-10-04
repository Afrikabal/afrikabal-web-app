import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import { FaCalendarAlt, FaEllipsisV } from 'react-icons/fa';

const TransactionHistory = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const transactions = [
        { id: 1, customerName: 'Robert Fox', date: '07.02.2023', amount: '$65467', location: 'United States', state: 'Pending', payment: 'Paid' },
        { id: 2, customerName: 'Jacob Jones', date: '09.02.2023', amount: '$89765', location: 'United States', state: 'Completed', payment: 'Paid' },
        { id: 3, customerName: 'Jacob Jones', date: '12.02.2023', amount: '$89765', location: 'United States', state: 'Completed', payment: 'Paid' },
        { id: 4, customerName: 'Jacob Jones', date: '13.02.2023', amount: '$67543', location: 'United States', state: 'Completed', payment: 'Paid' },
        { id: 5, customerName: 'Cody Fisher', date: '15.02.2023', amount: '$78654', location: 'United States', state: 'Completed', payment: 'Paid' },
        { id: 6, customerName: 'Jacob Jones', date: '17.02.2023', amount: '$65443', location: 'United States', state: 'Completed', payment: 'Paid' },
        { id: 7, customerName: 'Floyd Miles', date: '19.02.2023', amount: '$46287', location: 'United States', state: 'Completed', payment: 'Paid' },
        { id: 8, customerName: 'Devon Lane', date: '23.02.2023', amount: '$78650', location: 'United States', state: 'Completed', payment: 'Paid' }
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-700">Transaction History</h3>
                <div className="flex items-center space-x-2 border rounded-md px-3 py-2 bg-white shadow-sm">
                    <FaCalendarAlt className="text-gray-500" />
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd MMMM yyyy"
                        className="outline-none border-none text-gray-700"
                    />
                </div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md">View All</button>
            </div>

           
            <table className="min-w-full bg-white border rounded-md">
                <thead>
                    <tr className="w-full bg-gray-100 text-gray-700 text-left text-sm">
                        <th className="px-6 py-4">Customer Name</th>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Payment</th>
                        <th className="px-6 py-4">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-t">
                            <td className="px-6 py-4 flex items-center">
                                <Image
                                    src={`https://i.pravatar.cc/50?img=${transaction.id}`}
                                    alt={transaction.customerName}
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                {transaction.customerName}
                            </td>
                            <td className="px-6 py-4">{transaction.id}</td>
                            <td className="px-6 py-4">{transaction.date}</td>
                            <td className="px-6 py-4">{transaction.amount}</td>
                            <td className="px-6 py-4">{transaction.location}</td>
                            <td className="px-6 py-4">
                                <span
                                    className={`px-2 py-1 rounded-full text-sm ${transaction.state === 'Pending' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                                        }`}
                                >
                                    {transaction.state}
                                </span>
                            </td>
                            <td className="px-6 py-4">{transaction.payment}</td>
                            <td className="px-6 py-4">
                                <button className="text-gray-500 hover:text-gray-700">
                                    <FaEllipsisV />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-gray-200 rounded-md mr-2 text-neutral-600 hover:bg-gray-300">Previous</button>
                <button className="px-4 py-2 bg-lime-600 text-white rounded-md hover:bg-lime-400">Next</button>
            </div>
        </div>
    );
};

export default TransactionHistory;
