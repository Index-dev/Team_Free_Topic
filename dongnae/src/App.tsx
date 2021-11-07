import * as React from 'react';

import Router from './router';
import Header from './pages/header';
import GlobalStyles from './globalStyle';

const App = () => {
    return (
        <>
            <Header />
            <Router />
            <GlobalStyles />
        </>
    );
};

export default App;
