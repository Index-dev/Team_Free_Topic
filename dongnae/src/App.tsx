import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Router from './router';
import Header from './pages/header';
import GlobalStyles from './globalStyle';

import { screenTypeRecoil } from './modules/recoil/screenType';

const App = () => {
    const screenInfo = screenTypeRecoil();
    const isTablet = useMediaQuery({
        query: '(min-width: 650px) and (max-width: 1023px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 649px)',
    });

    useEffect(() => {
        function setScreenType() {
            if (isTablet) screenInfo.setType('isTablet');
            else if (isMobile) screenInfo.setType('isMobile');
            else screenInfo.setType('isPC');
        }
        window.addEventListener('resize', setScreenType);
        setScreenType();

        return () => window.removeEventListener('resize', setScreenType);
    }, [isTablet, isMobile]);

    return (
        <>
            <Header />
            <Router />
            <GlobalStyles />
        </>
    );
};

export default App;
