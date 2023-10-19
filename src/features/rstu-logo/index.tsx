import React from 'react';
import {isMobile} from 'react-device-detect'

import rstu_logo from './assets/rstu-logo.png'
import mob_logo from './assets/logo-mobile.png'

const RstuLogo = () => {
    return (
        <div className={'rstu-logo'}>
            <img src={
                isMobile
                    ? mob_logo
                    : rstu_logo
            } alt={'rstu-logo'}/>
        </div>
    );
};

export default RstuLogo;