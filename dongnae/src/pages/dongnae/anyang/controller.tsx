import React, { useEffect, useRef, useState } from 'react';
import Presenter from './presenter';

function Controller() {
    // state
    const [innerHeight, setInnerHeight] = useState<number>(0);
    const [innerWidth, setInnerWidth] = useState<number>(0);

    // ref
    const innerHeightRef = useRef<number>(0);
    const innerWidthRef = useRef<number>(0);

    const contentsRef1 = useRef<HTMLDivElement>(null);
    const contentsRef2 = useRef<HTMLDivElement>(null);
    const contentsRef3 = useRef<HTMLDivElement>(null);
    const contentsRef4 = useRef<HTMLDivElement>(null);

    const pyeongchonImageRef1 = useRef<HTMLImageElement>(null);
    const pyeongchonImageRef2 = useRef<HTMLImageElement>(null);
    const pyeongchonImageRef3 = useRef<HTMLImageElement>(null);
    const pyeongchonImageRef4 = useRef<HTMLImageElement>(null);
    const pyeongchonTitleSectionRef = useRef<HTMLImageElement>(null);
    const pyeongchonAcademyContainerRef = useRef<HTMLDivElement>(null);

    const middleParkMapImageContainerRef = useRef<HTMLDivElement>(null);
    const middleParkContentsSectionRef1 = useRef<HTMLDivElement>(null);
    const middleParkBarRef1 = useRef<HTMLDivElement>(null);
    const middleParkContentsContanerRef1 = useRef<HTMLDivElement>(null);
    const middleParkContentsContanerRef2 = useRef<HTMLDivElement>(null);
    const middleParkContentsSectionRef2 = useRef<HTMLDivElement>(null);
    const middleParkBarRef2 = useRef<HTMLDivElement>(null);
    const middleParkContentsContanerRef3 = useRef<HTMLDivElement>(null);
    const middleParkContentsContanerRef4 = useRef<HTMLDivElement>(null);

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

        middleParkMapImageCalc();
        middleParkTopCalc();
        middleParkBottomCalc();
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
                        innerHeightRef.current * index * 2)) /
                (innerHeightRef.current / 2);

            res = res < 0 ? 0 : res;
            res = res > 1 ? 1 : res;

            ref.current.style.opacity = `${res}`;
            ref.current.style.transform = `translateY(${50 - res * 50}px)`;
        }
    }

    // 스크롤에 따른 중앙공원 맵 이미지 효과
    function middleParkMapImageCalc() {
        if (middleParkMapImageContainerRef.current && pyeongchonAcademyContainerRef.current) {
            // 중앙공원 맵 확대/축소
            let res1 =
                (innerHeightRef.current * 3 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168) /
                innerHeightRef.current;

            res1 = res1 > 3 ? 3 : res1;
            res1 = res1 < 1 ? 1 : res1;

            middleParkMapImageContainerRef.current.style.transform = `scale(${res1})`;

            // 중앙공원 맵 Y축 이동
            let res2 =
                -(
                    innerHeightRef.current * 2 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168
                ) / innerHeightRef.current;

            console.log(res2);
            // 위로 이동
            if (res2 > 8 && res2 < 16.5) {
                res2 = 9 - res2;

                res2 = res2 < -1 ? -1 : res2;
                res2 = res2 > 1 ? 1 : res2;
            }
            // 두 번째 아래로 이동
            else if (res2 > 16.5) {
                res2 = -17.5 + res2;

                res2 = res2 > 0 ? 0 : res2;
                res2 = res2 < -1 ? -1 : res2;
            }
            // 첫 번째 아래로 이동
            else {
                res2 = res2 > 1 ? 1 : res2;
                res2 = res2 < 0 ? 0 : res2;
            }

            middleParkMapImageContainerRef.current.style.transform = `scale(${res1}) translateY(${res2 * 396}px)`;
        }
    }

    // 스크롤에 따른 중앙공원 상단 내용 효과
    function middleParkTopCalc() {
        if (
            pyeongchonAcademyContainerRef.current &&
            middleParkBarRef1.current &&
            middleParkContentsSectionRef1.current &&
            middleParkContentsContanerRef1.current &&
            middleParkContentsContanerRef2.current
        ) {
            // 상단 장대
            let res1 =
                -(
                    innerHeightRef.current * 3 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168
                ) / innerHeightRef.current;

            // 오버 스크롤로 사라지게 되는 경우
            if (res1 > 5.5) {
                res1 = 6.5 - res1;
            }

            res1 = res1 > 1 ? 1 : res1;
            res1 = res1 < 0 ? 0 : res1;

            middleParkBarRef1.current.style.height = `${res1 * 372}px`;
            middleParkBarRef1.current.style.transform = `translateY(-48px)`;

            // 상단 내용
            let res2 =
                -(
                    innerHeightRef.current * 4 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168
                ) / innerHeightRef.current;

            // 오버 스크롤로 사라지게 되는 경우
            if (res2 > 3.5) {
                res2 = 4.5 - res2;
            }

            res2 = res2 > 1 ? 1 : res2;
            res2 = res2 < 0 ? 0 : res2;

            middleParkContentsSectionRef1.current.style.opacity = `${res2}`;

            // 상단 세부내용 1
            const res3 =
                ((innerHeightRef.current * 5.5 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168) *
                    9) /
                10;

            middleParkContentsContanerRef1.current.style.transform = `translateY(${res3}px)`;

            // 상단 세부내용 2
            const res4 =
                ((innerHeightRef.current * 6.5 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168) *
                    9) /
                10;

            middleParkContentsContanerRef2.current.style.transform = `translateY(${res4}px)`;
        }
    }

    // 스크롤에 따른 중앙공원 하단 내용 효과
    function middleParkBottomCalc() {
        if (
            pyeongchonAcademyContainerRef.current &&
            middleParkBarRef2.current &&
            middleParkContentsSectionRef2.current &&
            middleParkContentsContanerRef3.current &&
            middleParkContentsContanerRef4.current
        ) {
            // 하단 장대
            let res1 =
                -(
                    innerHeightRef.current * 12 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168
                ) / innerHeightRef.current;

            // 오버 스크롤로 사라지게 되는 경우
            if (res1 > 5.5) {
                res1 = 6.5 - res1;
            }

            res1 = res1 > 1 ? 1 : res1;
            res1 = res1 < 0 ? 0 : res1;

            middleParkBarRef2.current.style.height = `${202 * res1}px`;
            middleParkBarRef2.current.style.transform = `translate(-144px)`;

            // 하단 내용
            let res2 =
                -(
                    innerHeightRef.current * 13 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168
                ) / innerHeightRef.current;

            // 오버 스크롤로 사라지게 되는 경우
            if (res2 > 3.5) {
                res2 = 4.5 - res2;
            }

            res2 = res2 > 1 ? 1 : res2;
            res2 = res2 < 0 ? 0 : res2;

            middleParkContentsSectionRef2.current.style.opacity = `${res2}`;

            // 하단 세부내용 1
            const res3 =
                (-(
                    innerHeightRef.current * 14.5 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168
                ) *
                    9) /
                10;

            middleParkContentsContanerRef3.current.style.transform = `translateY(${res3}px)`;

            // 하단 세부내용 2
            const res4 =
                (-(
                    innerHeightRef.current * 16 +
                    pyeongchonAcademyContainerRef.current.getBoundingClientRect().bottom +
                    168
                ) *
                    9) /
                10;

            middleParkContentsContanerRef4.current.style.transform = `translateY(${res4}px)`;
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
        pyeongchonAcademyContainerRef,
        middleParkMapImageContainerRef,
        middleParkContentsSectionRef1,
        middleParkBarRef1,
        middleParkContentsContanerRef1,
        middleParkContentsContanerRef2,
        middleParkBarRef2,
        middleParkContentsSectionRef2,
        middleParkContentsContanerRef3,
        middleParkContentsContanerRef4,
    };

    return <Presenter {...props} />;
}

export default Controller;
