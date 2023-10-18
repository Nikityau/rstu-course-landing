import {PrepareFormCardProps} from "../../../entities/prepare-form-card";
import {nanoid} from "nanoid";

export interface Exam extends PrepareFormCardProps {
    id: string
}

export const stateExamInfo:Exam[] = [
    {
        id: nanoid(),
        hours: 100,
        monthStart: 'октябрь',
        monthEnd: 'май'
    },
    {
        id: nanoid(),
        hours: 50,
        monthStart: 'февраль',
        monthEnd: 'май'
    }
]