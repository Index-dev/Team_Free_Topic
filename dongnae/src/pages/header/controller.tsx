import React, { useEffect, useRef, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { useScroll } from '../../hooks/useScroll';
import Presenter from './presenter';
import { screenTypeState } from '../../modules/recoil/screenType';

function Container() {
    const screenType = useRecoilValue(screenTypeState);
    const desktopContRef = useRef<HTMLDivElement>(null);
    const mobileContRef = useRef<HTMLDivElement>(null);

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
