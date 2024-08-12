//Styles
import './slider.scss';

//React
import { useEffect, useRef } from 'react';

//library
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

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
      <div className="defaultSwiper">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="mySwiper"
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
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <div className="paginationSwiper">
        <Swiper spaceBetween={30} slidesPerView={1.5} className="mySwiper">
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
    </div>
  );
}
