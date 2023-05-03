import React, { useRef, useState } from "react";
import project1 from "../../assets/img/project_devcube.png";
import project2 from "../../assets/img/project_easycart.png";
import project3 from "../../assets/img/project_crypto.png";
import project4 from "../../assets/img/project_timesnap.png";
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

const project_arr = [
  {
    title: "DevCube",
    description: "A web app for developers to create/join rooms and enhance skills.",
    image: project1,
    github_link: "https://github.com/suraj1771singh/devcube",
    project_link: "https://devcube.vercel.app/",
  },
  {
    title: "EasyCart",
    description: "An e-commerce web application that seamlessly integrates both customer and admin user interfaces.",
    image: project2,
    github_link: "https://github.com/suraj1771singh/easycartApp",
    project_link: "https://easycart.onrender.com/",
  },
  {
    title: "Crypto-Raptor",
    description: "NFT marketplace platform that allows creators to mint and sell their digital assets as NFTs.",
    image: project3,
    github_link: "https://github.com/suraj1771singh/crypto-raptor",
    project_link: "https://crypto-raptor.vercel.app/",
  },
  {
    title: "TimeSnap",
    description: "YouTube timestamp generator using machine learning algorithms to enable streamlined navigation.",
    image: project4,
    github_link: "https://github.com/suraj1771singh/timesnap",
    project_link: "https://timesnap.vercel.app/",
  },
];
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
        {project_arr.map((item, ind) => (
          <SwiperSlide key={ind}>
            {/* -----------------portfolio 1-------------- */}
            <Cards image={item.image} title={item.title} description={item.description} github_link={item.github_link} project_link={item.project_link}></Cards>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
