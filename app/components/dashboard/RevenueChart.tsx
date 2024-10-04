import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    ChartOptions,
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend, Title);

const options: ChartOptions<'doughnut'> = {
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 10,
                padding: 10,
                font: {
                    size: 12,
                },
            },
        },
        title: {
            display: true,
            text: 'Total Revenue Distribution',
            font: {
                size: 14,
            },
        },
    },
};

const RevenueChart: React.FC = () => {
    const data = {
        labels: ['Design', 'Finance', 'Marketing', 'Development'],
        datasets: [
            {
                label: 'Revenue',
                data: [645, 800, 350, 700],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    return (
        <div className="bg-white p-5 rounded-md shadow-md" style={{ width: '100%', height: '256px' }}>
            <h3 className="text-xl font-bold mb-4 text-gray-700">Total Revenue</h3>
            <div className="relative" style={{ width: '100%', height: '200px' }}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default RevenueChart;
