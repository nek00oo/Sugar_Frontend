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

const Chart = (props) => {
    const data = {
        labels: props.labels,
        datasets: [
            {
                label: 'Сахар',
                data: props.data,
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
        <Line data={data} options={options} style={{margin:"2vw"}}/>
    );
};

export default Chart;
