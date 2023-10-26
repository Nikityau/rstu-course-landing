import React from 'react';
import {PrepareCardProps} from "../index";

type Props = {
    onClick: () => void
} & PrepareCardProps

const AddonInfo = ({addonInfo, classNames, subject, icon,onClick}:Props) => {
    return (
        <div className={'prepare-card__addon-info'}>
            <div className={'prepare-card__addon-wrapper'}>
                <div className={'prepare-card__addon-title'}>
                    <img src={icon} alt={'icon'}/>
                    <h5>{subject}</h5>
                </div>
                <div className={'prepare-card__close'} onClick={onClick}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.2807 18.2194C19.3504 18.289 19.4056 18.3718 19.4433 18.4628C19.4811 18.5539 19.5005 18.6514 19.5005 18.75C19.5005 18.8485 19.4811 18.9461 19.4433 19.0372C19.4056 19.1282 19.3504 19.2109 19.2807 19.2806C19.211 19.3503 19.1283 19.4056 19.0372 19.4433C18.9462 19.481 18.8486 19.5004 18.7501 19.5004C18.6515 19.5004 18.5539 19.481 18.4629 19.4433C18.3718 19.4056 18.2891 19.3503 18.2194 19.2806L12.0001 13.0603L5.78068 19.2806C5.63995 19.4213 5.44907 19.5004 5.25005 19.5004C5.05103 19.5004 4.86016 19.4213 4.71943 19.2806C4.5787 19.1399 4.49963 18.949 4.49963 18.75C4.49963 18.551 4.5787 18.3601 4.71943 18.2194L10.9397 12L4.71943 5.78061C4.5787 5.63988 4.49963 5.44901 4.49963 5.24999C4.49963 5.05097 4.5787 4.8601 4.71943 4.71936C4.86016 4.57863 5.05103 4.49957 5.25005 4.49957C5.44907 4.49957 5.63995 4.57863 5.78068 4.71936L12.0001 10.9397L18.2194 4.71936C18.3602 4.57863 18.551 4.49957 18.7501 4.49957C18.9491 4.49957 19.1399 4.57863 19.2807 4.71936C19.4214 4.8601 19.5005 5.05097 19.5005 5.24999C19.5005 5.44901 19.4214 5.63988 19.2807 5.78061L13.0604 12L19.2807 18.2194Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={'prepare-card__addon-text'}>
                <p>{addonInfo.description}</p>
            </div>
            <a href={addonInfo.fileLink} download={subject} target={'_blank'}>
                <button className={'prepare-card__download'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 2L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14ZM18 20V9H13V4H6V20H18ZM12 19L8 15H10.5V12H13.5V15H16L12 19Z" fill="white"/>
                    </svg>
                    <span>Скачать полную программу</span>
                </button>
            </a>
        </div>
    );
};

export default AddonInfo;