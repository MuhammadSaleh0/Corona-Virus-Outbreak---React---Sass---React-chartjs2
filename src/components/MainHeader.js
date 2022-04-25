import Classes from '../Css/main/MainHeader.module.css';
import React from 'react';

const MainHeader = () => {
    return (
        <React.Fragment>
            <h1 className={Classes.mainHeader}>
                COVID-19 CORONAVIRUS OUTBREAK
                <br />
                تفشي الفيروس التاجي 19 (كرونا)
            </h1>
            <div className={Classes.sourceInfo}>
                <p>
                    By <a href="/">Muhammad Saleh</a>
                </p>
                <p>
                    تحديث البيانات كل 10 دقائق
                    <br />
                    Update data every 10 minutes
                </p>
                <div>
                    Source / المصدر :{' '}
                    <a
                        target="_blank"
                        href="https://www.worldometers.info/coronavirus/"
                        rel="noreferrer"
                    >
                        worldometers
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainHeader;
