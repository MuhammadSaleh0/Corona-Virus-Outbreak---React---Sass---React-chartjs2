import Classes from '../Css/main/Table.module.css';

import { useCallback, useState, useEffect } from 'react';

import USTable from './US-Table';
import React from 'react';

const UsaStates = React.memo((props) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        setError(null);
        try {
            const response = await fetch('https://disease.sh/v3/covid-19/states');
            if (!response.ok) {
                throw new Error('failed to Load Data!');
            }

            const dataFetched = await response.json();
            setData(dataFetched);
        } catch (error) {
            setError(error.message);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className={Classes.table}>
            <USTable usdata={data} error={error} />
        </div>
    );
});

export default UsaStates;
