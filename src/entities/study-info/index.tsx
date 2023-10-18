import React from 'react';
import Info from "./ui/info";
import Map from "./ui/map";

import './style/index.scss'

const StudyInfo = () => {
    return (
        <article className={'study-info'}>
            <div className={'study-info__container app-container'}>
                <Info/>
                <Map/>
            </div>
        </article>
    );
};

export default StudyInfo;