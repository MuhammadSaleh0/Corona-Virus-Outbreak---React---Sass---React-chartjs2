import Classes from '../Css/main/Table.module.css';
import React from 'react';
import CountriesTable from './CountriesTable';

const Countries = (props) => {

    return (
        <div className={Classes.table}>
            <CountriesTable data={props.countriesData} />
        </div>
    );
};

export default React.memo(Countries);
