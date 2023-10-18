import React from 'react';
import {stateExamInfo} from "./data/exam-info";
import PrepareFormCard from "../../entities/prepare-form-card";

import './style/index.scss'

const StateExamInfo = () => {
    return (
        <section className={'state-exam-info'}>
            {
                stateExamInfo.map(e => (
                    <PrepareFormCard
                        key={e.id}
                        hours={e.hours}
                        monthStart={e.monthStart}
                        monthEnd={e.monthEnd}
                    />
                ))
            }
        </section>
    );
};

export default StateExamInfo;