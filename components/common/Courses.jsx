"use client";
import { courses } from "@/data/courese";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { useContextElement } from "@/context/Context";
export default function Courses({ titleFont = "font-cardo" }) {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  return (
    <section className="section-course">
      <div className="tf-container">
        <div className="row ss-1">
          <div className="col-12">
<div className="heading-section course-heading-custom">
  <h5 className="wow fadeInUp" data-wow-delay="0s">
    Get expert advice in just one click
  </h5>

  <h2 className="wow fadeInUp" data-wow-delay="0.1s">
    Browse Our Top Courses
  </h2>

</div>
            <Swiper
              className="swiper-container slider-courses-5 wow fadeInUp"
              data-wow-delay="0.4s"
              modules={[Navigation, Pagination]}
              pagination={{
                el: ".spc1",
                clickable: true,
              }}
              breakpoints={{
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
                  slidesPerView: 4,
                },
              }}
              navigation={{
                clickable: true,
                nextEl: ".snbn1",
                prevEl: ".snbp1",
              }}
              spaceBetween={25}
            >
              {courses.map((course, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="course-item hover-img title-small">
                    <div className="features image-wrap">
                      <Image
                        className="lazyload"
                        data-src={course.imgSrc}
                        alt={course.alt}
                        src={course.imgSrc}
                        width={520}
                        height={380}
                      />
                      {course.tag && (
                        <div className="box-tags">
                          <a href="#" className="item best-seller">
                            {course.tag}
                          </a>
                        </div>
                      )}
                      <div
                        className={`box-wishlist tf-action-btns ${
                          isAddedtoWishlist(course.id) ? "active" : ""
                        } `}
                        onClick={() => toggleWishlist(course.id)}
                      >
                        <i className="flaticon-heart" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta">
                        <div className="meta-item">
                          <i className="flaticon-calendar" />
                          <p>{course.lessons}</p>
                        </div>
                        <div className="meta-item">
                          <i className="flaticon-clock" />
                          <p>{course.duration}</p>
                        </div>
                      </div>
                      <h6 className="fw-5 line-clamp-2">
                        <Link href={`/course-single-v1/${course.id}`}>
                          {course.title}
                        </Link>
                      </h6>
                      <div className="ratings pb-30">
                        <div className="number">{course.rating}</div>
                        <i className="icon-star-1" />
                        <i className="icon-star-1" />
                        <i className="icon-star-1" />
                        <i className="icon-star-1" />
                        <svg
                          width={12}
                          height={11}
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                            stroke="#131836"
                          />
                        </svg>
                        <div className="total">({course.reviews})</div>
                      </div>
                      <div className="author">
                        By:{" "}
                        <a href="#" className="author">
                          {course.author}
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="swiper-pagination pagination-slider pagination-courses5 pt-32 spc1" />
            </Swiper>
            <div className="swiper-button-prev btns-style-arrow courses5-prev snbp1" />
            <div className="swiper-button-next btns-style-arrow courses5-next snbn1" />
          </div>
        </div>
      </div>
    </section>
  );
}
