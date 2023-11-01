import React from "react";

import Header from "../widgets/header";
import CourseDescription from "../widgets/course-description";
import Contact from "../widgets/contact";

import PrepareSubjects from "../features/prepare-subjects";
import StateExamInfo from "../features/state-exam-info";
import SwipeInputExam from "../features/swipe-input-exam";
import UniversityExamInfo from "../features/university-exam-info";

import PrepareDirection from "../entities/prepare-direction";
import PrepareForm from "../entities/preapare-form";
import StudyInfo from "../entities/study-info";

import "./style/index.scss";

const App = () => {
    return (
        <main className={'app'}>
            <Header/>
            <CourseDescription/>
            <PrepareDirection
                title={'Направления подготовки'}
                subtitle={'к ЕГЭ  по предметам'}
            >
                <PrepareSubjects/>
            </PrepareDirection>
            <PrepareForm
                title={'Форма подготовки'}
                theme={'обучающихся к ЕГЭ'}
                group={'дистанционная/очная, группа от 5 до 20 человек.'}>
                <StateExamInfo/>
            </PrepareForm>
            <PrepareDirection
                title={'Направления подготовки'}
                subtitle={'к Внутренним вступительным испытаниям по предметам'}
            >
                <SwipeInputExam/>
            </PrepareDirection>
            <PrepareForm
                classNames={'prepare-form_text_lower'}
                title={'Форма подготовки'}
                theme={'к вступительным испытаниям для выпускников СПО'}
                group={'дистанционная/очная, группа от 5 до 20 человек.'}>
                <UniversityExamInfo/>
            </PrepareForm>
            <StudyInfo/>
            <Contact/>
        </main>
    );
};

export default App;