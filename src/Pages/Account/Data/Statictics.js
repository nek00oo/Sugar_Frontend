import React from 'react';
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend);

const Chart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'April', 'April', 'April', 'April', 'April', 'April', 'April'],
        datasets: [
            {
                label: 'Сахар',
                data: [10, 20, 50, 29, 30, 29, 29, 29, 29, 100, 340, 30, 30],
                fill: true,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor : 'rgba(53, 162, 235, 0.5)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        aspectRatio: 1.8,
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                }
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Уровень сахара",
                font: {
                    size: 15,
                }
            },
        },
    };

    return (
        <Line data={data} options={options} />
    );
};

export default Chart;
