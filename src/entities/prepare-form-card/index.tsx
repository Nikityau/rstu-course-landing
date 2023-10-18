import React from 'react';

import './style/index.scss'

export type PrepareFormCardProps = {
    hours: number,
    monthStart: string,
    monthEnd: string,
    addonInfo?: string
}

const PrepareFormCard = ({addonInfo, monthEnd, monthStart, hours}:PrepareFormCardProps) => {
    return (
        <div className={'prepare-form-card'}>
            <div className={'prepare-form-card__hours'}>
                <p>{hours}</p>
                <p>часов</p>
            </div>
            <div className={'prepare-form-card__months'}>
                <p>{monthStart} – {monthEnd}</p>
            </div>
            {
                addonInfo &&
                <div className={'prepare-form-card__addon-info'}>
                    <p>{addonInfo}</p>
                </div>
            }
        </div>
    );
};

export default PrepareFormCard;