import React, {useRef} from 'react';
import {Swiper as ISwiper} from "swiper/types";
import {Swiper, SwiperSlide} from "swiper/react";

import PrepareCard from "../../entities/prepare-card";

import {inputExam} from "./data/input-exam";

import './style/index.scss'
import 'swiper/css'

const SwipeInputExam = () => {

    const swiperRef = useRef<ISwiper>()

    return (
        <section className={'swipe-input-exam'}>
            <div
                className={'swipe-input-exam__btn'}
                 onClick={() => swiperRef.current.slidePrev()}
            >
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 7L9 12L14 17" stroke="#191617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <Swiper
                className={'swipe-input-exam__swiper'}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
            >
                {
                    inputExam.map(e => (
                        <SwiperSlide
                            key={e.id}
                        >
                            <PrepareCard
                                icon={e.icon}
                                subject={e.subject}
                                addonInfo={e.addonInfo}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div
                className={'swipe-input-exam__btn swipe-input-exam__btn_right'}
                onClick={() => swiperRef.current.slideNext()}
            >
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 7L9 12L14 17" stroke="#191617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default SwipeInputExam;