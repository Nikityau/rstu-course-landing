import React, {useState} from 'react';

import MainInfo from "./ui/main-info";
import AddonInfo from "./ui/addon-info";

import './style/index.scss'
import cn from "classnames";

export type PrepareCardProps = {
    icon: string,
    subject: string,
    classNames?: string[] | string,
    addonInfo?: {
        description: string,
        fileLink: string
    }
}

const PrepareCard = ({icon, subject,classNames, addonInfo}: PrepareCardProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={'prepare-card__flip-wrapper'}>
            <div className={cn(
                'prepare-card__flip-wrapper-inner',
                isOpen && 'prepare-card__flip-wrapper-inner_flipped'
            )}>
                <MainInfo icon={icon} subject={subject} addonInfo={addonInfo} onClick={toggle}/>
                <AddonInfo icon={icon} subject={subject} addonInfo={addonInfo} onClick={toggle}/>
            </div>
        </div>
    );
};

export default PrepareCard;