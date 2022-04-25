import { useEffect, useRef, useState } from 'react';
import Classes from '../../Css/main/InputSearch.module.css';
import React from 'react';

const InputSearch = (props) => {
    const textRef = useRef('');

    const [text, setText] = useState('');

    const inputSearchHandler = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        const Timer = setTimeout(() => {
            if (text === textRef.current.value) {
                props.searchText(text);
            }
        }, 1000);
        return () => {
            clearTimeout(Timer);
        };
    }, [text, textRef, props]);

    return (
        <div className={Classes.InputSearch}>
            <input
                value={text}
                ref={textRef}
                type="text"
                spellCheck="false"
                placeholder="Search For a Country"
                onChange={inputSearchHandler}
            />
        </div>
    );
};

export default React.memo(InputSearch);
