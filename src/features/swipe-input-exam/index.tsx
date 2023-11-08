import { nanoid } from 'nanoid';
import React, {useRef} from 'react';
import {Swiper as ISwiper} from "swiper/types";
import {Swiper, SwiperSlide} from "swiper/react";
import {isMobile} from "react-device-detect";
import { Pagination } from 'swiper/modules';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';


import PrepareCard from "../../entities/prepare-card";
import { useJsonContext } from '../../shared/helpers/hooks/use-json-context';


import './style/index.scss'

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';

const SwipeInputExam = () => {

    const swiperRef = useRef<ISwiper>()
    const splideRef = useRef<Splide>()
    const {innerExams} = useJsonContext()

    return (
        <section className={'swipe-input-exam'}>
            <div
                className={'swipe-input-exam__btn'}
                 onClick={() => {
                     //swiperRef.current.slidePrev()
                     splideRef.current.go('-1')
                 }}
            >
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 7L9 12L14 17" stroke="#191617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <Splide
                className={'swipe-input-exam__swiper'}
                options={{
                    perPage: 3,
                    arrows: false,
                    gap: '20px',

                }}
                ref={splideRef}

            >
                {
                    innerExams?.map(e => (
                        <SplideSlide
                            key={nanoid()}
                        >
                            <PrepareCard
                                icon={e.icon}
                                subject={e.title}
                                addonInfo={{
                                    description: e.description,
                                    fileLink: e.file
                                }}
                            />
                        </SplideSlide>
                    ))
                }
            </Splide>

          {/*  <Swiper
                className={'swipe-input-exam__swiper'}
                slidesPerView={
                    isMobile ? 1 : 3
                }
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                pagination={true}
                modules={[
                    Pagination
                ]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
            >
                {
                    innerExams?.map(e => (
                        <SwiperSlide
                            key={nanoid()}
                        >
                            <PrepareCard
                                icon={e.icon}
                                subject={e.title}
                                addonInfo={{
                                    description: e.description,
                                    fileLink: e.file
                                }}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>*/}
            <div
                className={'swipe-input-exam__btn swipe-input-exam__btn_right'}
                onClick={() => {
                    //swiperRef.current.slideNext()
                    splideRef.current.go('+1')
                }}
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