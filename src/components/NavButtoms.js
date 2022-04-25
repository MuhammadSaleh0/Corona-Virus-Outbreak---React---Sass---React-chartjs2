import { useEffect } from 'react';
import Classes from '../Css/main/NavButtoms.module.css';
import pieChart from '../images/pieChart.png';
import LineChart from '../images/LineChart.png';
import React from 'react';

const NavButtoms = (props) => {
    useEffect(() => {
        let li = document.querySelectorAll(`ul li`);

        li.forEach((item, index) => {
            if (0 === index) {
                li[0].style.backgroundColor = '#3273dc';
            }
            item.addEventListener('click', () => {
                console.log(index);
                // li.style.backgroundColor = "transparent";
                li.forEach((e) => {
                    e.style.backgroundColor = 'transparent';
                });
                li[0].style.backgroundColor = 'transparent';
                li[index].style.backgroundColor = '#3273dc';
            });
        });
    }, []);

    return (
        <div className={Classes.nav}>
            <ul>
                <li onClick={props.onShowWorld}>( the world ) العالم</li>
                <li onClick={props.onShowUS}>( USA ) الولايات المتحده الامريكيه</li>
                <li onClick={props.onShowPieGraph}>
                    <div className={Classes.chartIcon}>
                        <img src={pieChart} alt="icon" />
                    </div>
                    Pie Graph
                </li>
                <li onClick={props.onShowLineGraph}>
                    <div className={Classes.chartIcon}>
                        <img src={LineChart} alt="icon" />
                    </div>
                    Line Graph
                </li>
            </ul>
        </div>
    );
};

export default React.memo(NavButtoms);
