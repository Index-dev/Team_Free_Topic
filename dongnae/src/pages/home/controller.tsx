import React, { useState, useEffect, useRef } from 'react';
import Presenter from './presenter';

function Container() {
    const [cubeHeight, setCubeHeight] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cubeContRef = useRef<HTMLDivElement>(null);
    const rotateDegree = useRef<number>(0);
    const cubeStartClientXRef = useRef<number>(0); // 큐브 클릭(터치) 처음 위치
    const cubeEndClientXRef = useRef<number>(0); // 큐브 클릭(터치) 마지막 위치
    const cubeCheckRef = useRef<boolean>(false); // 큐브 클릭(터치) 여부

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (cubeContRef.current) {
    //             rotateDegree.current += 1;
    //             cubeContRef.current.style.transform = `rotateX(70deg)
    //                                                    rotateZ(${45 + rotateDegree.current}deg)
    //                                                    translateZ(${-cubeHeight / 2}px)`;
    //         }
    //     }, 100);

    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        // cube 회전 이벤트
        if (cubeContRef.current) {
            // web에서 마우스 클릭 시
            cubeContRef.current.addEventListener('mousedown', (event) => {
                cubeClickStart(event.clientX, event.clientX);
            });

            cubeContRef.current.addEventListener('mousemove', (event) => {
                cudeClickMove(event.clientX);
            });

            cubeContRef.current.addEventListener('mouseup', () => {
                cudeClickEnd();
            });

            // mobile에서 터치 시
            cubeContRef.current.addEventListener('touchstart', (event) => {
                cubeClickStart(event.targetTouches[0].clientX, event.targetTouches[0].clientX);
            });

            cubeContRef.current.addEventListener('touchmove', (event) => {
                cudeClickMove(event.targetTouches[0].clientX);
            });

            cubeContRef.current.addEventListener('touchend', () => {
                cudeClickEnd();
            });
        }

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 큐브 처음 클릭(터치)한 경우
    function cubeClickStart(startClintX: number, endClientX: number) {
        cubeStartClientXRef.current = startClintX;
        cubeEndClientXRef.current = endClientX;
        cubeCheckRef.current = true;
    }

    // 큐브 클릭(터치) 후 이동하는 경우
    function cudeClickMove(endClientX: number) {
        if (cubeCheckRef.current === true) {
            cubeEndClientXRef.current = endClientX;
        }
    }

    // 큐브 이동이 끝난 경우
    function cudeClickEnd() {
        if (cubeContRef.current && cubeCheckRef.current === true) {
            cubeCheckRef.current = false;

            if (cubeEndClientXRef.current - cubeStartClientXRef.current > 20) {
                rotateDegree.current -= 180;
            } else if (cubeEndClientXRef.current - cubeStartClientXRef.current < -20) {
                rotateDegree.current += 180;
            }

            cubeContRef.current.style.transform = `rotateX(70deg)
                                                   rotateZ(${45 + rotateDegree.current}deg)
                                                   translateZ(${-cubeHeight / 2}px)`;
        }
    }

    function handleResize() {
        if (cubeContRef.current) setCubeHeight(cubeContRef.current.offsetHeight);
        if (wrapperRef.current) wrapperRef.current.style.height = `${window.innerHeight}px`;
    }

    return <Presenter cubeHeight={cubeHeight} wrapperRef={wrapperRef} cubeContRef={cubeContRef} />;
}

export default Container;
