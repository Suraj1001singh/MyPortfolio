import React, { useRef, useState } from "react";
import portfolioImage1 from "../../assets/img/portfolio1.jpg";
import portfolioImage2 from "../../assets/img/portfolio2.jpg";
import portfolioImage3 from "../../assets/img/portfolio3.jpg";
import Cards from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css"

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function SwiperPortfolio() {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            // width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1024: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        // slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* -----------------portfolio 1-------------- */}
          <Cards image={portfolioImage1} title="Modern Websites" description=" Website adaptable to all devices, and animated interaction"></Cards>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          {/* -----------------portfolio 2-------------- */}
          <Cards image={portfolioImage2} title="Online Store" description=" Website adaptable to all devices, and animated interaction"></Cards>
        </SwiperSlide>
        <SwiperSlide>
          {/* -----------------portfolio 3-------------- */}
          <Cards image={portfolioImage3} title="Brand Design" description=" Website adaptable to all devices, and animated interaction"></Cards>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
