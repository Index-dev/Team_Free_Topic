import React, { useEffect, useRef, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import Presenter from './presenter';
import { screenTypeState } from '../../modules/recoil/screenType';

function Container() {
    const screenType = useRecoilValue(screenTypeState);
    const logoContRef = useRef<HTMLDivElement>(null);
    const desktopContRef = useRef<HTMLDivElement>(null);

    // Desktop일때 헤더 등장
    const transformHeader = useCallback(
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

    useEffect(() => {
        if (screenType === 'isPC') {
            window.addEventListener('mousemove', transformHeader);

            return () => window.removeEventListener('mousemove', transformHeader);
        }
    }, [screenType]);

    //TODO:
    //      태블릿, 모바일) 상단으로 스크롤 시 헤더 등장, 평상시에는 로고만 보이게
    //          add  event listner scroll, 이전값과 이후값 비교 후 위로 적당히 이동했으면 헤더 등장
    //          평상시에는 로고만 보이게

    const passProps = {
        desktopContRef,
    };

    return <Presenter {...passProps} />;
}

export default Container;
