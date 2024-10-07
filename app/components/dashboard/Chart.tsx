import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart: React.FC = () => {
    const data = {
        labels: ['Marketing', 'Development', 'Finance', 'Design', 'Admin'],
        datasets: [
            {
                label: 'Financial Performance',
                data: [12000, 19000, 30000, 5000, 20000],
                backgroundColor: ['#4CAF50', '#FF9800', '#F44336', '#2196F3', '#9C27B0'],
            },
        ],
    };

    return (
        <div className="bg-white p-5 rounded-md shadow-md">
            <Bar data={data} />
        </div>
    );
};

export default Chart;
