import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import {Exam} from "../data/exam-info";
import {useJsonContext} from "../../../shared/helpers/hooks/use-json-context";
import produce from "immer";

export const useStateExamInfo = () => {
    const {price} = useJsonContext()
    const [state, setState] = useState<Exam[]>([
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
    ])

    useEffect(() => {
        setState(prev => produce(prev, draft => {
            draft[0]['price'] = price?.price['100h_ege']
            draft[1]['price'] = price?.price['50h_ege']
        }))
    }, [price])


    return state
}