import React from 'react';

import ContactCard from "../../entities/contact-card";
import SiteLink from "../../entities/site-link";


import './style/index.scss'

import mail_img from './assets/mail.svg'
import phone_img from './assets/phone.svg'
import abit_img from './assets/abit.svg'

const Contact = () => {
    return (
        <footer className={'contact'}>
            <div className={'contact__container app-container'}>
                <div className={'contact__title'}>
                    <h3>Остались вопросы задайте их нам</h3>
                </div>
                <div className={'contact__info'}>
                    <SiteLink href={'mailto:podgot@rgups.ru'}>
                        <ContactCard icon={mail_img}>
                            <div className={'contact__mail'}>
                                <p>podgot@rgups.ru</p>
                            </div>
                        </ContactCard>
                    </SiteLink>
                    <SiteLink href={'tel:8(863) 272- 62-16'}>
                        <ContactCard icon={phone_img}>
                            <div className={'contact__phone'}>
                                <p>8(863) 272- 62-16</p>
                            </div>
                        </ContactCard>
                    </SiteLink>
                    <SiteLink href={'https://www.rgups.ru/abitur/'}>
                        <ContactCard icon={abit_img}>
                            <div className={'contact__mail contact__abit'}>
                                <p>Поступающим</p>
                            </div>
                        </ContactCard>
                    </SiteLink>
                </div>
            </div>
        </footer>
    );
};


export default Contact;