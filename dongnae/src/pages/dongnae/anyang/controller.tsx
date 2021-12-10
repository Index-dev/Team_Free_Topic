import React, { useEffect, useRef, useState } from 'react';
import { useScroll } from '../../../hooks/useScroll';
import Presenter from './presenter';

function Controller() {
    const { scrollY } = useScroll();

    // state
    const [innerHeight, setInnerHeight] = useState<number>(0);
    const [innerWidth, setInnerWidth] = useState<number>(0);

    // ref
    const innerHeightRef = useRef<number>(0);
    const innerWidthRef = useRef<number>(0);
    // const;

    const contentsRef1 = useRef<HTMLDivElement>(null);
    const contentsRef2 = useRef<HTMLDivElement>(null);
    const contentsRef3 = useRef<HTMLDivElement>(null);
    const contentsRef4 = useRef<HTMLDivElement>(null);

    const pyeongchonImageRef1 = useRef<HTMLImageElement>(null);
    const pyeongchonImageRef2 = useRef<HTMLImageElement>(null);
    const pyeongchonImageRef3 = useRef<HTMLImageElement>(null);
    const pyeongchonImageRef4 = useRef<HTMLImageElement>(null);
    const pyeongchonTitleSectionRef = useRef<HTMLImageElement>(null);

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

        pyeongchonImageCalc(pyeongchonImageRef1, 0);
        pyeongchonImageCalc(pyeongchonImageRef2, 1);
        pyeongchonImageCalc(pyeongchonImageRef3, 2);
        pyeongchonImageCalc(pyeongchonImageRef4, 3);
    }

    function resize() {
        innerHeightRef.current = window.innerHeight;
        innerWidthRef.current = window.innerWidth;

        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
    }

    // 스크롤에 따른 글씨 효과 (opacity, translateY)
    function contentsCalc(ref: React.RefObject<HTMLDivElement>) {
        if (ref.current) {
            let res =
                (innerHeightRef.current * 0.9 - ref.current.getBoundingClientRect().top) / (innerHeightRef.current / 2);

            res = res < 0 ? 0 : res;
            res = res > 1 ? 1 : res;

            ref.current.style.opacity = `${res}`;
            ref.current.style.transform = `translateY(${-50 + res * 50}px)`;
        }
    }

    // 스크롤에 따른 평촌 이미지 효과
    function pyeongchonImageCalc(ref: React.RefObject<HTMLImageElement>, index: number) {
        if (ref.current && pyeongchonTitleSectionRef.current) {
            let res =
                (innerHeightRef.current * 0.9 -
                    (pyeongchonTitleSectionRef.current.getBoundingClientRect().bottom +
                        60 +
                        innerHeightRef.current * index)) /
                (innerHeightRef.current / 2);

            res = res < 0 ? 0 : res;
            res = res > 1 ? 1 : res;

            ref.current.style.opacity = `${res}`;
            ref.current.style.transform = `translateY(${50 - res * 50}px)`;
        }
    }

    const props = {
        innerHeight,
        innerWidth,
        contentsRef1,
        contentsRef2,
        contentsRef3,
        contentsRef4,
        pyeongchonImageRef1,
        pyeongchonImageRef2,
        pyeongchonImageRef3,
        pyeongchonImageRef4,
        pyeongchonTitleSectionRef,
    };

    return <Presenter {...props} />;
}

export default Controller;
