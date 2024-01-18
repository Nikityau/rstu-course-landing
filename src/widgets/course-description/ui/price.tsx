import React from 'react';
import SiteLink from "../../../entities/site-link";
import SignUpBtn from "../../../features/sing-up-btn";
import {useJsonContext} from "../../../shared/helpers/hooks/use-json-context";

const Price = () => {

    const {price} = useJsonContext()

    return (
        <section className={'course-description__price-info'}>
            <div className={'course-description__price'}>
                <p>{price?.price['main'] || 'null'} ₽</p>
                <p>За 1 предмет</p>
            </div>
            <SiteLink href={'https://www.rgups.ru/zapis-na-podgotovitel-nye-kursy/'}>
                <SignUpBtn classNames={'course-description__btn'}/>
            </SiteLink>
        </section>
    );
};

export default Price;