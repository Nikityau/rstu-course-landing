import React from 'react';

const Info = () => {
    return (
        <section className={'study-info__info'}>
            <div className={'study-info__title'}>
                <h3>Начало занятий по мере комплектования групп.</h3>
            </div>
            <div className={'study-info__docs'}>
                <p>
                    Прием документов производится в рабочие дни с 8:15 до 17:00 (перерыв с 12:15 до 13:00) по адресу:
                    пл. Ростовского Стрелкового Полка Народного Ополчения, д.2, ауд. А123.
                </p>
            </div>
            <div className={'study-info__addon-info'}>
                <h5>Для оформления на курсы необходимо иметь следующие документы:</h5>
                <ul>
                    <li>паспорт законного представителя слушателя ( для несовершеннолетних);</li>
                    <li>паспорт слушателя.</li>
                </ul>
            </div>
        </section>
    );
};

export default Info;