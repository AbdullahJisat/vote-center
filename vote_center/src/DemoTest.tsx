import React, {useDebugValue, useEffect, useLayoutEffect, useRef, useState} from 'react';
import ApiUrl from "./config/ApiUrl.tsx";

const DemoTest = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    }

    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(boxRef.current.clientWidth);
            setHeight(boxRef.current.clientHeight);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [data, setData] = useState(null);

    const url = `https://localhost/vote-center/public/api/voters`;
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data));
    }, [url]);

    useDebugValue(data ? `Data loaded: ${data.length} items` : 'Loading...');

    return data;

    return (
        <div ref={boxRef} style={{width: '50%', height: '50%', backgroundColor: 'red'}}>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>

        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Focus Input</button>

    </div>
)
    ;
};

export default DemoTest;
