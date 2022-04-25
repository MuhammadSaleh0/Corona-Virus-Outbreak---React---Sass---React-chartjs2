import React from 'react';
import Classes from '../Css/main/FlattenCurve.module.css';
import mygif from '../images/mygif.gif';

const FlattenCurve = () => {
    return (
        <div className={Classes.flattenCurve}>
            <h2>flatten the curve of coronavirus</h2>
            <img src={mygif} alt="flatCurve"></img>
        </div>
    );
};

export default FlattenCurve;
