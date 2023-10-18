import React from 'react';
import cn from 'classnames'

import './style/index.scss'

type Props = {
    classNames?: string[] | string
}

const SignUpBtn = ({classNames}:Props) => {
    return (
        <button className={cn(
            'sing-up-btn',
            classNames
        )}>
            Записаться
        </button>
    );
};

export default SignUpBtn;