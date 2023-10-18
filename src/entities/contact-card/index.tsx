import React from 'react';

import './style/index.scss'

type Props = {
    icon: string
} & React.PropsWithChildren

const ContactCard = ({icon, children}:Props) => {
    return (
        <div className={'contact-card'}>
            <div className={'contact-card__icon'}>
                 <img src={icon} alt={'icon'}/>
            </div>
            <div className={'contact-card__info'}>
                {children}
            </div>
        </div>
    );
};

export default ContactCard;