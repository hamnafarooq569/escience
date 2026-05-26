"use client";

import { categories } from "@/data/categories";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
  const swiperOptions = {
    spaceBetween: 20,
    observer: true,
    loop: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
    },
    navigation: {
      clickable: true,
      nextEl: ".courses10-next",
      prevEl: ".courses10-prev",
    },
  };

  return (
    <section className="eschool-hero">
      <div className="eschool-hero-inner">
        <div className="eschool-hero-content">
          <h1 className="wow fadeInUp" data-wow-delay="0.1s">
            Learn <strong>Today,</strong>
            <br />
            Lead <span>Tomorrow</span>
          </h1>

          <p className="wow fadeInUp" data-wow-delay="0.2s">
            Our O/A Levels curriculum offers comprehensive topic advice,
            innovative teaching strategies, and personalized support to prepare
            students for better future, preparing them for tests and college
            applications.
          </p>
        </div>

        <div className="eschool-hero-images wow fadeInUp" data-wow-delay="0.3s">
          <div className="eschool-gradient-circle"></div>

<div className="eschool-video-box">
  <iframe
    src="https://www.youtube.com/embed/OXWFZW-xY-Y?autoplay=1&mute=1&loop=1&playlist=OXWFZW-xY-Y&controls=1&rel=0&modestbranding=1&playsinline=1"
    title="eScience Academy Intro Video"
    allow="autoplay; encrypted-media; picture-in-picture"
    allowFullScreen
  />
</div>

        </div>
      </div>

      <div className="bot-categories wow fadeInUp" data-wow-delay="0.4s">
        <Swiper
          {...swiperOptions}
          className="swiper-container slider-courses-10"
          modules={[Pagination, Navigation]}
        >
          {categories.map((category, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="item">
                <div className="icon">
                  <Image
                    alt={category.title}
                    src={category.src}
                    width={category.width}
                    height={category.height}
                  />
                </div>
                <h6>{category.title}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}