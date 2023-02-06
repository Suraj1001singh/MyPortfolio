import React, { useRef, useState } from "react";
import testimonialImage1 from "../../assets/img/testimonial1.jpg";
import testimonialImage2 from "../../assets/img/testimonial2.jpg";
import testimonialImage3 from "../../assets/img/testimonial3.jpg";

import TestimonialCard from "./TestimonialCard";
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

export default function SwiperTestimonial() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={48}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
            "568": {
              "slidesPerView": 2,
            //   "spaceBetween": 10
            },
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* -----------------portfolio 1-------------- */}
          <TestimonialCard
            image={testimonialImage1}
            clientName="Sara Smith"
            description="I get a good inspiration, I carry put my project with all possible
            quality and attention and support 24 hours a day."
          ></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          {/* -----------------portfolio 2-------------- */}
          <TestimonialCard
            image={testimonialImage2}
            clientName="Matt Robinson"
            description="I get a good inspiration, I carry put my project with all possible
            quality and attention and support 24 hours a day."
          ></TestimonialCard>
        </SwiperSlide>
        <SwiperSlide>
          {/* -----------------portfolio 3-------------- */}
          <TestimonialCard
            image={testimonialImage3}
            clientName="Raul Harris"
            description="I get a good inspiration, I carry put my project with all possible
            quality and attention and support 24 hours a day."
          ></TestimonialCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
