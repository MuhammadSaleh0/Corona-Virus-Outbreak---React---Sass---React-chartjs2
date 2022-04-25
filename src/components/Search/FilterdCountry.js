import Classes from '../../Css/main/InputSearch.module.css';
import React from 'react';

const FilterdCountry = (props) => {
    let FilterdData = props.data.map((e) => {
        return (
            <ul key={e.country}>
                <li>
                    Country : <span>{e.country}</span>
                </li>
                <li>
                    Cases : <span>{e.cases.toLocaleString()}</span>
                </li>
                <li>
                    Today Cases : <span>{e.todayCases}</span>
                </li>
                <li className={Classes.deaths}>
                    Deaths : <span>{e.deaths.toLocaleString()}</span>
                </li>
                <li className={Classes.deaths}>
                    Today Deaths : <span>{e.todayDeaths}</span>
                </li>
                <li className={Classes.recovered}>
                    Recovered : <span>{e.recovered.toLocaleString()}</span>
                </li>
                <li className={Classes.critical}>
                    Critical : <span>{e.critical.toLocaleString()}</span>
                </li>
                <li>
                    Cases Per One Million :{' '}
                    <span>{e.casesPerOneMillion.toLocaleString()}</span>
                </li>
            </ul>
        );
    });

    return <div className={Classes.CountrySearch}>{FilterdData}</div>;
};

export default React.memo(FilterdCountry);
