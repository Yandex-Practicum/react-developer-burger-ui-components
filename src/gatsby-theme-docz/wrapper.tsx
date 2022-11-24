/// <reference path="png.d.ts" />
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import imgSrc from './favicon.png';

const Wrapper: React.FC = ({ children }) => (
    <React.Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>React Developer Burger Ui Components</title>
            <link rel="icon" type="image/png" href={imgSrc} />
        </Helmet>
        {children}
    </React.Fragment>
);

export default Wrapper;
