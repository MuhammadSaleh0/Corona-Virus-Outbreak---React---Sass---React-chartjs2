import Classes from '../Css/main/Table.module.css';
import React from 'react';

const CountriesTable = React.memo((props) => {
    let dataReceved;
    dataReceved = props.data.map((e) => {
        return (
            <tr key={e.country}>
                <td className={Classes.country}>{e.country}</td>
                <td>{e.cases.toLocaleString()}</td>
                <td>{e.todayCases}</td>
                <td className={Classes.deaths}>{e.deaths.toLocaleString()}</td>
                <td className={Classes.deaths}>{e.todayDeaths}</td>
                <td className={Classes.recovered}>
                    {e.recovered.toLocaleString()}
                </td>
                <td>{e.active.toLocaleString()}</td>
                <td className={Classes.critical}>{e.critical.toLocaleString()}</td>
                <td>{e.casesPerOneMillion.toLocaleString()}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr className={Classes.TableHead}>
                    <td>Country (البلد)</td>
                    <td>Cases (الحالات)</td>
                    <td>
                        Today Cases <br />
                        (حالات اليوم)
                    </td>
                    <td>Deatds (وفيات)</td>
                    <td>
                        Today Deatds <br />
                        (وفيات اليوم)
                    </td>
                    <td>Recovered (تعافى)</td>
                    <td>Active (نشيط)</td>
                    <td>critical (حرج)</td>
                    <td>
                        casesPerOneMillion <br />
                        (حالات لكل مليون)
                    </td>
                </tr>
            </thead>
            <tbody>{dataReceved}</tbody>
        </table>
    );
});

export default CountriesTable;
