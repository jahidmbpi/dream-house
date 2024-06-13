import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import React, { useRef, useState } from "react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Header = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co/dpM9Hh3/What-makes-a-home-a-Luxury-Home.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co/P4hLt5Q/download.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co/6Yw7VM9/download-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co/dpM9Hh3/What-makes-a-home-a-Luxury-Home.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co/7CqHh5Z/images.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px]"
            src="https://i.ibb.co/6Yw7VM9/download-1.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
