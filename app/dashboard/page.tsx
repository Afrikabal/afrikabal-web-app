"use client";

import Chart from "../components/dashboard/Chart";
import Header from "../components/dashboard/Header";
import RevenueChart from "../components/dashboard/RevenueChart";
import Sidebar from "../components/dashboard/Sidebar";
import StatsCard from "../components/dashboard/StatsCard";
import TransactionHistory from "../components/dashboard/TransactionHistory";

const Home: React.FC = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 bg-gray-100">
                <Header /> 
                <div className="p-5">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <StatsCard title="Total Income" amount="$8,567,345" percentage={10} />
                        <StatsCard title="Total Expenses" amount="$7,567,345" percentage={-5} />
                        <StatsCard title="Net Profit" amount="$6,567,345" percentage={15} />
                        <StatsCard title="Total Cash" amount="$6,567,345" percentage={5} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <Chart />
                        <RevenueChart />
                    </div>
                    <TransactionHistory />
                </div>
            </div>
        </div>
    );
};

export default Home;
