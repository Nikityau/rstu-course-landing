import React from 'react';

import Title from "./title";
import Subt from "./subt";
import Text from "./text";
import Price from "./price";
import Descriptor from "./descriptor";

const Description = () => {
    return (
        <section className={'course-description__descr'}>
            <div className={'course-description__container'}>
                <Title/>
                <Subt/>
                <Text/>
                <Price/>
                <Descriptor/>
            </div>
        </section>
    );
};

export default Description;