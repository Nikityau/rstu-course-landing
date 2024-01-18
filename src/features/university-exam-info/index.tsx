import React from 'react';
import {uExam} from "./data/u-exam";

import PrepareFormCard from "../../entities/prepare-form-card";
import {useExamInfo} from "./hooks/useExamInfo";

const UniversityExamInfo = () => {

    const state = useExamInfo()

    return (
        <section className={'university-exam-info state-exam-info'}>
            {
                state.map(e => (
                    <PrepareFormCard
                        key={e.id}
                        hours={e.hours}
                        monthStart={e.monthStart}
                        monthEnd={e.monthEnd}
                        addonInfo={e.addonInfo}
                        price={e?.price}
                    />
                ))
            }
        </section>
    );
};

export default UniversityExamInfo;