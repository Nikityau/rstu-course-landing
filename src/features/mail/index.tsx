import React from 'react';

import './style/index.scss'

type Props = {
    mail: string
}

const Mail = ({mail}:Props) => {
    return (
        <a className={'mail'} href={`mailto:${mail}`}>
            {mail}
        </a>
    );
};

export default Mail;