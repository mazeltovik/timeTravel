//Styles
import './slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

//React
import { useState, useEffect, useRef } from 'react';

//library
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

//Handlers

//Types
import { SliderProps } from './sliderTypes';

export default function Slider({ content }: SliderProps) {
  const sliderContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sliderCurrent = sliderContainer.current as HTMLDivElement;
    setTimeout(() => {
      sliderCurrent.classList.add('fadeIn');
    }, 500);
    return () => {
      sliderCurrent.classList.remove('fadeIn');
    };
  }, [content]);
  return (
    <div className="sliderContainer" ref={sliderContainer}>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // setWrapperSize={true}
        modules={[Navigation]}
        className="mySwiper"
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {content.map((item) => {
          return (
            <SwiperSlide key={item.year}>
              <p className="year">{item.year}</p>
              <p className="event">{item.event}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
