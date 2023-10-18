import {nanoid} from "nanoid";
import {PrepareCardProps} from "../../../entities/prepare-card";

import train_img  from '../assets/train.svg'
import shield_img from '../assets/shield.svg'
import megaphone_img from '../assets/megaphone.svg'

export interface IInputExam extends PrepareCardProps {
    id: string,
}

export const inputExam: Omit<IInputExam, 'classNames'>[] = [
    {
        id: nanoid(),
        icon: train_img,
        subject: 'Общий курс железных дорог'
    },
    {
        id: nanoid(),
        icon: shield_img,
        subject: 'Безопасность жизнедеятельности'
    },
    {
        id: nanoid(),
        icon: megaphone_img,
        subject: 'Основы рекламной деятельности'
    },
    {
        id: nanoid(),
        icon: train_img,
        subject: 'Общий курс железных дорог'
    },
    {
        id: nanoid(),
        icon: shield_img,
        subject: 'Безопасность жизнедеятельности'
    },
    {
        id: nanoid(),
        icon: megaphone_img,
        subject: 'Основы рекламной деятельности'
    }
]