import React from 'react';
import {uExam} from "./data/u-exam";

import PrepareFormCard from "../../entities/prepare-form-card";

const UniversityExamInfo = () => {
    return (
        <section className={'university-exam-info state-exam-info'}>
            {
                uExam.map(e => (
                    <PrepareFormCard
                        key={e.id}
                        hours={e.hours}
                        monthStart={e.monthStart}
                        monthEnd={e.monthEnd}
                        addonInfo={e.addonInfo}
                    />
                ))
            }
        </section>
    );
};

export default UniversityExamInfo;