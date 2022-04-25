import Classes from '../Css/main/Table.module.css';
import React from 'react';

const USTable = React.memo((props) => {
    let UsData;

    UsData = props.usdata.map((e) => {
        return (
            <tr key={e.state}>
                <td className={Classes.country}>{e.state}</td>
                <td>{e.cases.toLocaleString()}</td>
                <td>{e.todayCases}</td>
                <td className={Classes.deaths}>{e.deaths.toLocaleString()}</td>
                <td className={Classes.deaths}>{e.todayDeaths}</td>
                <td className={Classes.recovered}>
                    {e.recovered.toLocaleString()}
                </td>
                <td>{e.active.toLocaleString()}</td>
                <td>{e.casesPerOneMillion.toLocaleString()}</td>
            </tr>
        );
    });

    return (
        <table>
            <thead>
                <tr className={Classes.TableHead}>
                    <td>State (الولايه)</td>
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
                    <td>
                        casesPerOneMillion <br />
                        (حالات لكل مليون)
                    </td>
                </tr>
            </thead>
            <tbody>{UsData}</tbody>
        </table>
    );
});

export default USTable;
