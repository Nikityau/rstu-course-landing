import React, { useEffect, useState } from 'react';
import { isMobile } from "react-device-detect";

import RstuLogo from "../../features/rstu-logo";
import Mail from "../../features/mail";
import SignUpBtn from "../../features/sing-up-btn";

import SiteLink from "../../entities/site-link";

import './style/index.scss'

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__container app-container'}>
                <SiteLink href={'https://www.rgups.ru/'}>
                    <RstuLogo />
                </SiteLink>
                {
                    isMobile
                        ? <>
                            <Mail mail={'podgot@rgups.ru'} />
                            <SiteLink href={'https://www.rgups.ru/zapis-na-podgotovitel-nye-kursy/'}>
                                <SignUpBtn />
                            </SiteLink>
                        </>
                        : <div className={'header__contact'}>
                            <Mail mail={'podgot@rgups.ru'} />
                            <SiteLink href={'https://www.rgups.ru/zapis-na-podgotovitel-nye-kursy/'}>
                                <SignUpBtn />
                            </SiteLink>
                        </div>
                }
            </div>
        </header>
    );
};

export default Header;