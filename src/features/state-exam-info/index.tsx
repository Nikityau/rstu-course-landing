import React from 'react';
import {stateExamInfo} from "./data/exam-info";
import PrepareFormCard from "../../entities/prepare-form-card";
import {useStateExamInfo} from "./hooks/useStateExamInfo";

import './style/index.scss'

const StateExamInfo = () => {

    const state = useStateExamInfo()

    return (
        <section className={'state-exam-info'}>
            {
                state.map(e => (
                    <PrepareFormCard
                        key={e.id}
                        hours={e.hours}
                        monthStart={e.monthStart}
                        monthEnd={e.monthEnd}
                        price={e?.['price']}
                    />
                ))
            }
        </section>
    );
};

export default StateExamInfo;