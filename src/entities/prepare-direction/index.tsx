import React from 'react';

import './style/index.scss'

type Props = {
    title: string,
    subtitle: string,
} & React.PropsWithChildren

const PrepareDirection = ({title, subtitle, children}:Props) => {
    return (
        <article className={'prepare-direction'}>
            <div className={'prepare-direction__container app-container'}>
                <section className={'prepare-direction__title'}>
                    <h3>{title}</h3>
                    <h5>{subtitle}</h5>
                </section>
                <div className={'prepare-direction__info'}>
                    {children}
                </div>
            </div>
        </article>
    );
};

export default PrepareDirection;