import React, { useState, useEffect, useRef } from 'react';

import Presenter from './presenter';

function Container() {
    const [cubeHeight, setCubeHeight] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cubeContRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        handleResize();
        window.onresize = handleResize;
    }, []);

    function handleResize() {
        if (cubeContRef.current) setCubeHeight(cubeContRef.current.offsetHeight);
        if (wrapperRef.current) wrapperRef.current.style.height = `${window.innerHeight}px`;
    }

    return <Presenter cubeHeight={cubeHeight} wrapperRef={wrapperRef} cubeContRef={cubeContRef} />;
}

export default Container;
