import React from 'react';
import PrepareCard from "../../entities/prepare-card";
import { useJsonContext } from '../../shared/helpers/hooks/use-json-context';
import { nanoid } from 'nanoid';

import './style/index.scss'

const PrepareSubjects = () => {
    const {stateExams} = useJsonContext()

    return (
        <section className={'prepare-subjects'}>
            {
                stateExams?.map(f => (
                    <PrepareCard
                        key={nanoid()}
                        icon={f.icon}
                        subject={f.title}
                        addonInfo={{
                            description: f.description,
                            fileLink: f.file
                        }}
                    />
                ))
            }
        </section>
    );
};

export default PrepareSubjects;