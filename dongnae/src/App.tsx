import React, { useEffect } from 'react';

import Router from './router';
import Header from './pages/header';
import GlobalStyles from './globalStyle';
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';

import { screenTypeState } from './modules/recoil/screenType';

const App = () => {
    const isTablet = useMediaQuery({
        query: '(min-width: 650px) and (max-width: 1023px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width: 649px)',
    });
    const [, setScreenType] = useRecoilState(screenTypeState);

    useEffect(() => {
        // app 렌더마다 스크린 타입 체크
        if (isTablet) setScreenType('isTablet');
        else if (isMobile) setScreenType('isMobile');
        else setScreenType('isPC');
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
