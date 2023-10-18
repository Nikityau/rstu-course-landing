import React from 'react';
import SiteLink from "../../../entities/site-link";
import SignUpBtn from "../../../features/sing-up-btn";

const Price = () => {
    return (
        <section className={'course-description__price-info'}>
            <div className={'course-description__price'}>
                <p>12 600 ₽</p>
                <p>За 1 предмет</p>
            </div>
            <SiteLink href={'https://www.rgups.ru/zapis-na-podgotovitel-nye-kursy/'}>
                <SignUpBtn classNames={'course-description__btn'}/>
            </SiteLink>
        </section>
    );
};

export default Price;