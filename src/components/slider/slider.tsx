//Styles
import './slider.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';

//React
import { useState, useEffect } from 'react';

//library
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

//Handlers

export default function Slider() {
  return (
    <div className="sliderContainer">
      <Swiper
        spaceBetween={30}
        slidesPerView={3.5}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
