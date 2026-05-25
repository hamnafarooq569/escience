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

          <Image
            src="/images/page-title/page-title-home2-1.jpg"
            alt="Students studying"
            width={430}
            height={340}
            className="eschool-img eschool-img-one"
          />

          <Image
            src="/images/page-title/page-title-home2-2.jpg"
            alt="Students writing"
            width={360}
            height={270}
            className="eschool-img eschool-img-two"
          />

          <Image
            src="/images/item/item-1.png"
            alt=""
            width={95}
            height={95}
            className="eschool-float-item eschool-item-one animate-cir45"
          />

          <Image
            src="/images/item/item-2.png"
            alt=""
            width={85}
            height={85}
            className="eschool-float-item eschool-item-two animate-dot-anim-2"
          />

          <Image
            src="/images/item/item-3.png"
            alt=""
            width={90}
            height={90}
            className="eschool-float-item eschool-item-three animate-dot-anim-3"
          />
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