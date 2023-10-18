import React from 'react';

import Description from "./ui/description";

import writing_img from './assets/writing.png'
import hand_img from './assets/hand.png'

import './style/index.scss'

const CourseDescription = () => {
    return (
        <article className={'course-description'}
            style={{
                backgroundImage: `url(${writing_img})`
            }}
        >
            <div className={'course-description__hand'}
                style={{
                    backgroundImage: `url(${hand_img})`
                }}
            >
            </div>
            <Description/>
        </article>
    );
};

export default CourseDescription;