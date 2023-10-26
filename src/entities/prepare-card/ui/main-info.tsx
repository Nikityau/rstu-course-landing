import React from 'react';
import cn from "classnames";

import {PrepareCardProps} from "../index";

type Props = {
    onClick: () => void
} & PrepareCardProps

const MainInfo = ({addonInfo, classNames, subject, icon, onClick}:Props) => {
    return (
        <div className={cn(
            'prepare-card',
            classNames
        )}>
            <img src={icon} alt={`${subject}-icon`}/>
            <p>{subject}</p>
            {
                addonInfo.fileLink &&
                <button onClick={onClick}>
                подробнее
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                    <path d="M1.5 11.5L6.5 6.5L1.5 1.5" stroke="#191617" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>
            }
        </div>
    );
};

export default MainInfo;