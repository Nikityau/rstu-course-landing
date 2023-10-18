import {nanoid} from "nanoid";
import {Exam} from "../../state-exam-info/data/exam-info";

export const uExam: Exam[] = [
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
]