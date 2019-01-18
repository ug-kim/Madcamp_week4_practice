import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

// 우리의 웹어플리케이션에 BrowserRouter를 적용한다

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

export default Root;
