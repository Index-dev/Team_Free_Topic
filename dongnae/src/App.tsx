import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Router from './router';
import Header from './pages/header';
import GlobalStyles from './globalStyle';

import { screenTypeRecoil } from './modules/recoil/screenType';

const App = () => {
    const screenType = screenTypeRecoil();

    const isPC = useMediaQuery({
        query: '(min-width: 1024px)',
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 650px) and (max-width: 1023px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 649px)',
    });

    useEffect(() => {
        function setScreenType() {
            if (isPC) screenType.setIsPC();
            else if (isTablet) screenType.setIsTablet();
            else screenType.setIsMobile();
        }
        window.addEventListener('resize', setScreenType);
        setScreenType();

        return () => window.removeEventListener('resize', setScreenType);
    }, [isPC, isTablet, isMobile]);

    return (
        <>
            <Header />
            <Router />
            <GlobalStyles />
        </>
    );
};

export default App;
