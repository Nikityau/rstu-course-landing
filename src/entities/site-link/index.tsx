import React from 'react';

type Props = {
    href: string,
} & React.PropsWithChildren

const SiteLink = ({href,children}:Props) => {
    return (
        <a href={href} target={'_blank'}>
            {children}
        </a>
    );
};

export default SiteLink;