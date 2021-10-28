import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDom.render(
    <RecoilRoot>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </RecoilRoot>,
    document.querySelector('#root'),
);
