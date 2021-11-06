import React, { useState, useEffect, useRef } from 'react';

import Presenter from './presenter';

function Container() {
    const [cubeHeight, setCubeHeight] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cubeContRef = useRef<HTMLDivElement>(null);
    const rotateDegree = useRef<number>(0);

    useEffect(() => {
        setInterval(() => {
            rotateDegree.current += 1;
            if (cubeContRef.current) {
                cubeContRef.current.style.transform = `rotateX(70deg) rotateZ(${
                    45 + rotateDegree.current
                }deg) translateZ(${(cubeHeight * -1) / 2}px))`;
            }
        }, 10);
    });

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        if (cubeContRef.current) {
            cubeContRef.current.addEventListener('dragstart', (event) => {
                // const cubeCont = event.target as HTMLDivElement;
                console.log('click', { x: event.x, y: event.y });
            });
            cubeContRef.current.addEventListener('dragend', (event) => {
                // const cubeCont = event.target as HTMLDivElement;
                console.log('click', { x: event.x, y: event.y });
            });
            cubeContRef.current.addEventListener('mousemove', (event) => {
                // const cubeCont = event.target as HTMLDivElement;
                console.log('mouse Move', { x: event.x, y: event.y });
            });
            cubeContRef.current.addEventListener('mouseover', (event) => {
                // const cubeCont = event.target as HTMLDivElement;
                console.log('mouse Over', { x: event.x, y: event.y });
            });
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleResize() {
        if (cubeContRef.current) setCubeHeight(cubeContRef.current.offsetHeight);
        if (wrapperRef.current) wrapperRef.current.style.height = `${window.innerHeight}px`;
    }

    return <Presenter cubeHeight={cubeHeight} wrapperRef={wrapperRef} cubeContRef={cubeContRef} />;
}

export default Container;
