
"use client";

import{Swiper,SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import slide1 from "@/assets/slider 1.jpeg";
import slide2 from "@/assets/slider 2.jpeg";
import slide3 from "@/assets/slide 3.jpeg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";


const swiperOptions = {
  pagination: {
    clickable: true,
    bulletClass: "swiper-pagination-bullet !size-4 !bg-gray-400",
    bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500",
  },
  modules: [Pagination],
};

const images =[
  {
    path:slide1.src,
    name:"Slide 1",
  },
  {
    path:slide2.src,
    name:"Slide 2",
  },
  {
    path:slide3.src,
    name:"Slide 3",
  },
];


export default function  slider(){
  return(
    <section>
      <div className="container mx-auto">
        <Swiper {...swiperOptions} className="mySwiper">
         {images.map((slide)=>(
          <SwiperSlide key={slide.path}>
            <Image
            className="w-full max-h-96 object-cover"
            src={slide.path}
            alt={slide.name}
            width={1920}
            height={600}
            />
          </SwiperSlide>
         ))}
        </Swiper>
      </div>
      </section>
  );
}