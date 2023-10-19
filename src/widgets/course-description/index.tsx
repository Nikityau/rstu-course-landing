import React from 'react';

import Description from "./ui/description";
import Title from "./ui/title";
import Subt from "./ui/subt";
import Text from "./ui/text";
import Price from "./ui/price";
import Descriptor from "./ui/descriptor";

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
            <div className={'course-description__test'}>
                <div className={'course-description__test-c app-container'}>
                    <Title/>
                    <Subt/>
                    <Text/>
                    <Price/>
                    <Descriptor/>
                </div>
            </div>
        </article>
    );
};

export default CourseDescription;