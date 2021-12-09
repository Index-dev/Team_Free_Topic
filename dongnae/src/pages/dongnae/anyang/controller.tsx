import React, { useEffect, useRef, useState } from 'react';
import Presenter from './presenter';

function Controller() {
    // ref
    const innerHeightRef = useRef<number>(0);
    const innerWidthRef = useRef<number>(0);
    const contentsRef1 = useRef<HTMLDivElement>(null);
    const contentsRef2 = useRef<HTMLDivElement>(null);
    const contentsRef3 = useRef<HTMLDivElement>(null);
    const contentsRef4 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scroll();
        resize();

        window.addEventListener('scroll', scroll);
        window.addEventListener('resize', resize);

        return () => {
            window.addEventListener('resize', scroll);
            window.removeEventListener('resize', resize);
        };
    }, []);

    function scroll() {
        contentsCalc(contentsRef1);
        contentsCalc(contentsRef2);
        contentsCalc(contentsRef3);
        contentsCalc(contentsRef4);
    }

    function resize() {
        innerHeightRef.current = window.innerHeight;
    }

    // 스크롤에 따른 글씨 효과 (opacity, translateY)
    function contentsCalc(ref: React.RefObject<HTMLDivElement>) {
        if (ref.current) {
            let res =
                (innerHeightRef.current * 0.9 - ref.current.getBoundingClientRect().top) / (innerHeightRef.current / 2);

            res = res < 0 ? 0 : res;
            res = res > 1 ? 1 : res;

            ref.current.style.opacity = `${res}`;
            ref.current.style.transform = `translateY(${50 - res * 50}px)`;
        }
    }

    const props = {
        contentsRef1,
        contentsRef2,
        contentsRef3,
        contentsRef4,
    };

    return <Presenter {...props} />;
}

export default Controller;
