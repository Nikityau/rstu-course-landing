import React from 'react';
import cn from "classnames";

import './style/index.scss'

export type PrepareCardProps = {
    icon: string,
    subject: string,
    classNames?: string[] | string
}

const PrepareCard = ({icon, subject, classNames}:PrepareCardProps) => {
    return (
        <div className={cn(
            'prepare-card',
             classNames
        )}>
            <img src={icon} alt={`${subject}-icon`}/>
            <p>{subject}</p>
        </div>
    );
};

export default PrepareCard;