import {nanoid} from "nanoid";
import {PrepareCardProps} from "../../../entities/prepare-card";

import train_img  from '../assets/train.svg'
import shield_img from '../assets/shield.svg'
import megaphone_img from '../assets/megaphone.svg'
import lang_img from '../assets/language.svg'
import law_img from '../assets/law.svg'
import pig_img from '../assets/pig.svg'
import group_img from '../assets/group.svg'

export interface IInputExam extends PrepareCardProps {
    id: string,
}

export const inputExam: Omit<IInputExam, 'classNames'>[] = [
    {
        id: nanoid(),
        icon: train_img,
        subject: 'Общий курс железных дорог',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: shield_img,
        subject: 'Безопасность жизнедеятельности',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: megaphone_img,
        subject: 'Основы рекламной деятельности',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: lang_img,
        subject: 'Русский язык',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: law_img,
        subject: 'Правовые основы профессиональной деятельности',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: pig_img,
        subject: 'Основы экономики',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: group_img,
        subject: 'Основы управленческой деятельности',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: megaphone_img,
        subject: 'Основы рекламной деятельности',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
]

