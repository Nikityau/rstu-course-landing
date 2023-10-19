import {nanoid} from "nanoid";

import {PrepareCardProps} from "../../../entities/prepare-card";

import math_img from '../assets/math.svg'
import lang_img from '../assets/languages.svg'
import it_img from '../assets/it.svg'
import world_img from '../assets/world.svg'
import physic_img from '../assets/physic.svg'
import history_img from '../assets/history.svg'

interface Subject extends PrepareCardProps {
    id: string
}

export const subjects: Subject[] = [
    {
        id: nanoid(),
        icon: math_img,
        subject: 'Математика',
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
        icon: physic_img,
        subject: 'Физика',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: it_img,
        subject: 'Информатика и ИКТ',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: world_img,
        subject: 'Обществознание',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    },
    {
        id: nanoid(),
        icon: history_img,
        subject: 'История России',
        addonInfo: {
            description: 'Lorem ipsum dolor sit amet consectetur. Morbi id ac elementum quam vivamus aliquet. Commodo sit semper adipiscing id odio pellentesque odio.',
            fileLink: ''
        },
    }
]