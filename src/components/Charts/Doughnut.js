import Classes from '../../Css/main/Doughnut.module.css';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

import { cases1, deaths1, recovered1 } from '../Statistics';

const options = {
    responsive: true,
    color: ['White'],
    animation: {
        animateRotate: true,
        animateScale: true,
    },
    plugins: {
        legend: {
            labels: {
                boxWidth: 50,
                boxColor: 'white',
            },
        },
    },
};

const DoughnutChart = (props) => {
    return (
        <div className={Classes.DoughnutChart}>
            <div>
                <Doughnut
                    data={{
                        labels: ['Cases', 'Recovered', 'Deaths'],
                        datasets: [
                            {
                                // id: 1,
                                data: [cases1, recovered1, deaths1],
                                backgroundColor: ['White', 'green', 'red'],
                                borderColor: ['White'],
                                borderWidth: 2,
                                hoverBackgroundColor: ['White', 'green', 'red'],
                                hoverBorderWidth: 4,
                            },
                        ],
                    }}
                    options={options}
                />
            </div>
        </div>
    );
};

export default DoughnutChart;
