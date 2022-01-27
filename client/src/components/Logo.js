import React from 'react';

import logo from '../assets/logo.png'

function Logo({height}) {
    return (
        <img
            src={logo}
            alt="LemonTree Media logo"
            height={height || 30}
            width={3/2 * height || 42.5}
        />
    );
}

export default Logo;
