import React, { useEffect, useRef, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import Presenter from './presenter';
import { screenTypeState } from '../../modules/recoil/screenType';

function Container() {
    const screenType = useRecoilValue(screenTypeState);
    const desktopContRef = useRef<HTMLDivElement>(null);
    const mobileContRef = useRef<HTMLDivElement>(null);
    const currentScrollTop = useRef<number>(0);

    // Desktop 헤더 등장
    const transformDesktopHeader = useCallback(
        (event) => {
            const { clientY } = event;
            if (clientY <= window.innerHeight / 10) {
                if (desktopContRef.current) desktopContRef.current.style.transform = 'translate3d(0, 0, 0)';
            } else if (clientY > window.innerHeight / 10) {
                if (desktopContRef.current) desktopContRef.current.style.transform = 'translate3d(0, -100%, 0)';
            }
        },
        [desktopContRef.current],
    );

    //TODO:
    //      태블릿, 모바일) 상단으로 스크롤 시 헤더 등장, 평상시에는 로고만 보이게
    //          add  event listner scroll, 이전값과 이후값 비교 후 위로 적당히 이동했으면 헤더 등장
    //          평상시에는 로고만 보이게

    // Mobile 헤더 등장
    // const transformMobileHeader = useCallback((event) => {
    //     console.log(event);
    //     // if (clientY <= window.innerHeight / 10) {
    //     //     if (mobileContRef.current) mobileContRef.current.style.transform = 'translate3d(0, 0, 0)';
    //     // } else if (clientY > window.innerHeight / 10) {
    //     // if (mobileContRef.current) mobileContRef.current.style.transform = 'translate3d(0, -100%, 0)';
    //     // }
    // }, []);

    useEffect(() => {
        if (screenType === 'isPC') {
            window.addEventListener('mousemove', transformDesktopHeader);

            return () => window.removeEventListener('mousemove', transformDesktopHeader);
        }
    }, [screenType]);

    const passProps = {
        desktopContRef,
        mobileContRef,
    };

    return <Presenter {...passProps} />;
}

export default Container;
