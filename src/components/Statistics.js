import Classes from '../Css/main/Statistics.module.css';
import ItemCard from './Layout/ItemCard';
import VirusIcon from './Icons/VirusIcon';
import Skull from './Icons/Skull';
import Recover from './Icons/Recover';
import UpDate from './Icons/Date';
import Alert from './Icons/Alert';
import Test from './Icons/Test';
import React from 'react';
import { useState, useEffect } from 'react';
import LoadingIndicator from './Layout/LoadingIndicator';

// import Alert from "../images/warning.png"

export let cases1, deaths1, recovered1;

const Statistics = React.memo((props) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(null);
            setLoading(true);
            try {
                const response = await fetch('https://disease.sh/v3/covid-19/all');
                if (!response.ok) {
                    throw new Error('failed to Load Data!');
                }

                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    let dateTime = { date: new Date().toLocaleDateString() };
    let cases,
        deaths,
        todayCases,
        todayDeaths,
        critical,
        tests,
        recovered = '';

    if (
        data.cases &&
        data.deaths &&
        data.recovered &&
        data.todayCases &&
        data.todayDeaths &&
        data.critical &&
        data.tests
    ) {
        cases = data.cases.toLocaleString();
        deaths = data.deaths.toLocaleString();
        recovered = data.recovered.toLocaleString();
        todayCases = data.todayCases.toLocaleString();
        todayDeaths = data.todayDeaths.toLocaleString();
        critical = data.critical.toLocaleString();
        tests = data.tests.toLocaleString();

        cases1 = data.cases;
        deaths1 = data.deaths;
        recovered1 = data.recovered;

        if (loading) {
            cases =
                deaths =
                recovered =
                todayCases =
                todayDeaths =
                critical =
                tests =
                <LoadingIndicator />;
        }
    } else {
        cases =
            deaths =
            recovered =
            todayCases =
            todayDeaths =
            critical =
            tests =
            error;
    }

    return (
        <div className={Classes.stat}>
            <ItemCard className={Classes.item}>
                <VirusIcon />
                <div className={Classes.itemDetails}>
                    <p>
                        All Casses <br /> كل الحالات
                    </p>
                    <div>{cases}</div>
                </div>
            </ItemCard>

            <ItemCard className={Classes.item}>
                <Skull />
                <div className={Classes.itemDetails}>
                    <p>
                        All Deaths <br /> كل الوفيات
                    </p>
                    <div className={Classes.death}>{deaths}</div>
                </div>
            </ItemCard>

            <ItemCard className={Classes.item}>
                <Recover />
                <div className={Classes.itemDetails}>
                    <p>
                        Recovered <br /> تعافى
                    </p>
                    <div className={Classes.recover}>{recovered}</div>
                </div>
            </ItemCard>

            <ItemCard className={Classes.item}>
                <UpDate />
                <div className={Classes.itemDetails}>
                    <p>
                        Last updated <br /> آخر تحديث
                    </p>
                    <div>{dateTime.date}</div>
                </div>
            </ItemCard>

            <ItemCard className={Classes.item}>
                <VirusIcon />
                <div className={Classes.itemDetails}>
                    <p>
                        Today Cases <br /> حالات اليوم
                    </p>
                    <div>{todayCases}</div>
                </div>
            </ItemCard>

            <ItemCard className={Classes.item}>
                <Skull />
                <div className={Classes.itemDetails}>
                    <p>
                        Today Deaths <br /> وفيات اليوم
                    </p>
                    <div className={Classes.death}>{todayDeaths}</div>
                </div>
            </ItemCard>

            <ItemCard className={Classes.item}>
                <Alert />
                <div className={Classes.itemDetails}>
                    <p>
                        Critical
                        <br /> حالات حرجة
                    </p>
                    <div className={Classes.death}>{critical}</div>
                </div>
            </ItemCard>

            <ItemCard className={Classes.item}>
                <Test />
                <div className={Classes.itemDetails}>
                    <p>
                        Tests
                        <br /> حالات المختبرة
                    </p>
                    <div>{tests}</div>
                </div>
            </ItemCard>
        </div>
    );
});

export default Statistics;
