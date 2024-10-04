


interface StatsCardProps {
    title: string;
    amount: string;
    percentage: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, amount, percentage }) => {
    return (
        <div className="bg-white p-5 rounded-md shadow-md flex flex-col">
            <h3 className="text-gray-500 pt-5">{title}</h3>
            <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-neutral-600 pt-5">{amount}</h2>
            <span className={`text-sm ${percentage >= 0 ? 'text-green-500' : 'text-red-500'} pt-5`}>
                {percentage >= 0 ? '+' : ''}{percentage}%
                </span>
            </div>
        </div>
    );
};

export default StatsCard;
