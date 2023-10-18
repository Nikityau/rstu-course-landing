import React from 'react';

import rstu_img from '../assets/rstu.png'


const Subt = () => {
    return (
        <div className={'course-description__subt'}>
            <div className={'course-description__img'}
                 style={{
                     backgroundImage: `url(${rstu_img})`
                 }}
            >
            </div>
            <div className={'course-description__subt-text'}>
                <h2>РГУПС</h2>
            </div>
        </div>
    );
};

export default Subt;