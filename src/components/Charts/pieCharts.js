import Classes from '../../Css/main/Charts.module.css';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ItemCard from '../Layout/ItemCard';

// datasetIdKey='id'

const PieCharts = (props) => {
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
                    boxWidth: 10,
                    boxColor: 'white',
                },
            },
        },
    };

    let CountriesCharts;

    CountriesCharts = props.data.map((e) => {
        return (
            <ItemCard className={Classes.ChartItem} key={e.country}>
                <h3>{e.country}</h3>
                <Doughnut
                    data={{
                        labels: [
                            'Cases',
                            'Today Cases',
                            'Deaths',
                            'Today Deatds',
                            'Recovered',
                            'Active',
                            'critical',
                            'casesPerOneMillion',
                        ],
                        datasets: [
                            {
                                id: e.country,
                                data: [
                                    e.cases,
                                    e.todayCases,
                                    e.deaths,
                                    e.todayDeaths,
                                    e.recovered,
                                    e.active,
                                    e.critical,
                                    e.casesPerOneMillion,
                                ],
                                backgroundColor: [
                                    '#5fbef2',
                                    '#702a41',
                                    '#474345',
                                    'red',
                                    'green',
                                    '#1a2799',
                                    '#ede966',
                                    '#99a9cf',
                                ],
                                borderColor: ['White'],
                                borderWidth: 1,
                                // hoverBackgroundColor: ["White", "green", "red"],
                                hoverBorderWidth: 4,
                            },
                        ],
                    }}
                    options={options}
                    datasetIdKey={e.country}
                />
            </ItemCard>
        );
    });

    return <div className={Classes.Charts}>{CountriesCharts}</div>;
};

export default PieCharts;
