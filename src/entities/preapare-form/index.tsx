import React from 'react';

import './style/index.scss'
import cn from "classnames";

type Props = {
    title: string,
    theme: string,
    group: string,
    classNames?: string[] | string
} & React.PropsWithChildren

const PrepareForm = ({group, theme,title, children,classNames}:Props) => {
    return (
        <article className={cn(
            'prepare-form',
            classNames
        )}>
            <div className={'prepare-form__container app-container'}>
                <section className={'prepare-form__text-info'}>
                    <div className={'prepare-form__title'}>
                        <h3>{title}</h3>
                    </div>
                    <div className={'prepare-form__theme'}>
                        <h5>{theme}</h5>
                    </div>
                    <div className={'prepare-form__group'}>
                        <p>{group}</p>
                    </div>
                </section>
                <div className={'prepare-form__info'}>
                    {children}
                </div>
            </div>
        </article>
    );
};

export default PrepareForm;