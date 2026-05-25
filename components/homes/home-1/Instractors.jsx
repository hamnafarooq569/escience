"use client";
import { instructors } from "@/data/instractors";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Instractors() {
  const options = {
    spaceBetween: 25,
    observer: true,
    observeParents: true,
    breakpoints: {
      425: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      700: {
        slidesPerView: 2.3,
      },
      1000: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="section-instructor">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
<div className="heading-section course-heading-custom text-center">
  <h5 className="wow fadeInUp" data-wow-delay="0s">
    Our Faculty
  </h5>

  <h2 className="wow fadeInUp" data-wow-delay="0.1s">
    Learn From The Best Instructors
  </h2>
</div>
            <Swiper
              className="swiper-container slider-courses-5 wow fadeInUp"
              data-wow-delay="0.3s"
              {...options}
              modules={[Navigation, Pagination]}
            >
              {instructors.map((instructor, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="instructors-item hover-img style-column">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src={instructor.imgSrc}
                        alt={instructor.alt}
                        src={instructor.imgSrc}
                        width={520}
                        height={521}
                      />
                    </div>
                    <div className="entry-content">
                      <h6 className="entry-title">
                        <Link href={`/instructor-single/${instructor.id}`}>
                          {instructor.name}
                        </Link>
                      </h6>
                      <p className="short-description">
                        {instructor.description}
                      </p>
                      <div className="ratings">
                        <div className="number">{instructor.rating}</div>
                        <i className="icon-star-1" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
