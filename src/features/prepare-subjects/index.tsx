import React from 'react';
import {subjects} from "./data/subjects";
import PrepareCard from "../../entities/prepare-card";

import './style/index.scss'

const PrepareSubjects = () => {
    return (
        <section className={'prepare-subjects'}>
            {
                subjects.map(s => (
                    <PrepareCard
                        key={s.id}
                        icon={s.icon}
                        subject={s.subject}
                        addonInfo={s.addonInfo}
                    />
                ))
            }
        </section>
    );
};

export default PrepareSubjects;