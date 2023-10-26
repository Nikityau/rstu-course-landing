import React, { useEffect, useState } from 'react';
import { FileJson } from 'src/shared/data/files';

import {files as filesJson} from '../../shared/data/files'
import stateExamJson from '../../shared/data/state-exam.json'
import innerExamJson from '../../shared/data/inner-exam.json'

interface IJsonContext {
    stateExams: FileJson[],
    innerExams: FileJson[]
}

export const JsonContext = React.createContext<IJsonContext>(null)

const WithJson = ({children}:React.PropsWithChildren) => {
    const [stateExams, setStateExams] = useState<FileJson[]>(null)
    const [innerExams, setInnerExams] = useState<FileJson[]>(null)

    useEffect(() => {
        console.log(filesJson);
        console.log(stateExamJson);
        fetch(stateExamJson)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setStateExams(data)
        })
        fetch(innerExamJson)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setInnerExams(data)
        })

    }, [])

    return (
        <JsonContext.Provider value={{
            stateExams: stateExams,
            innerExams: innerExams
        }}>
            {children}
        </JsonContext.Provider>
    );
};

export default WithJson;