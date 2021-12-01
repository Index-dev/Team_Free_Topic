import React, { useEffect, useRef, useCallback } from 'react';

import { useScroll } from '../../hooks/useScroll';
import { checkScreenTypeRecoil } from '../../modules/recoil/screenType';

import Presenter from './presenter';

function Container() {
    const { isPC } = checkScreenTypeRecoil().type;
    const desktopContRef = useRef<HTMLDivElement>(null);
    const mobileContRef = useRef<HTMLDivElement>(null);

    const { scrollY, scrollDirection } = useScroll();

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
        if (isPC) {
            window.addEventListener('mousemove', transformDesktopHeader);

            return () => window.removeEventListener('mousemove', transformDesktopHeader);
        }
    }, [isPC]);

    const passProps = {
        scrollY,
        scrollDirection,
        desktopContRef,
        mobileContRef,
    };

    return <Presenter {...passProps} />;
}

export default Container;
