import { nanoid } from "nanoid";

import math_pdf from '../pdf/math.pdf'
import physic_pdf from '../pdf/physic.pdf'
import ru_lang_pdf from '../pdf/ru-lang.pdf'
import social_pdf from '../pdf/social.pdf'

import math_icon from '../assets/math.svg'
import physic_icon from '../assets/physic.svg'
import ru_lang_icon from '../assets/ru-lang.svg'
import it_icon from '../assets/it.svg'
import social_icon from '../assets/social.svg'
import history_icon from '../assets/history.svg'

import train_icon from '../assets/train.svg'
import shield_icon from '../assets/shield.svg'
import money_icon from '../assets/money.svg'
import law_icon from '../assets/law.svg'
import group_icon from '../assets/group.svg'
import ad_icon from '../assets/ad.svg'

export interface FileJson {
    id: string,
    title: string,
    icon: string,
    file: string,
    description?: string,
}

export const files: FileJson[] = [
    {
        id: nanoid(),
        title: 'Математика',
        file: math_pdf,
        icon: math_icon,
    },
    {
        id: nanoid(),
        title: 'Физика',
        file: physic_pdf,
        icon: physic_icon
    },
    {
        id: nanoid(),
        title: 'Русский язык',
        file: ru_lang_pdf,
        icon: ru_lang_icon
    },
    {
        id: nanoid(),
        title: 'Информатика и ИКТ',
        file: null,
        icon: it_icon,
        description: ''
    },
    {
        id: nanoid(),
        title: 'Обществознание',
        file: social_pdf,
        icon: social_icon,
        description: ''
    },
    {
        id: nanoid(),
        title: 'История России',
        file: "",
        icon: history_icon,
        description: ''
    },
    
]

export const innerExams: FileJson[] = [
    {
        id: nanoid(),
        title: 'Общий курс железных дорог',
        file: null,
        icon: train_icon,
    },
    {
        id: nanoid(),
        title: 'Безопасность жизнедеятельности',
        file: null,
        icon: shield_icon,
    },
    {
        id: nanoid(),
        title: 'Основы экономики',
        file: null,
        icon: money_icon,
    },
    {
        id: nanoid(),
        title: 'Правовые основы профессиональной деятельности',
        file: null,
        icon: law_icon,
    },
    {
        id: nanoid(),
        title: 'Основы управленческой деятельности',
        file: null,
        icon: group_icon,
    },
    {
        id: nanoid(),
        title: 'Основы рекламной деятельности',
        file: null,
        icon: ad_icon,
    }
]