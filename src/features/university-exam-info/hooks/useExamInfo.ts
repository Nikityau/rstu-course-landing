import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import {Exam} from "../../state-exam-info/data/exam-info";
import {useJsonContext} from "../../../shared/helpers/hooks/use-json-context";
import produce from "immer";

export const useExamInfo = () => {
    const {price} = useJsonContext()
    const [state, setState] = useState< Exam[]>([
        {
            id: nanoid(),
            hours: 50,
            monthStart: 'февраль',
            monthEnd: 'июль',
            addonInfo: 'для очной и заочной форм обучения'
        },
        {
            id: nanoid(),
            hours: 30,
            monthStart: '(интенсивные)',
            monthEnd: '(июль)',
            addonInfo: 'для очной и заочной форм обучения'
        },
    ])

    useEffect(() => {
        setState(prev => produce(prev, draft => {
            draft[0]['price'] = price?.price['50h_spo']
            draft[1]['price'] = price?.price['30h_spo']
        }))
    }, [price])

    return state
}