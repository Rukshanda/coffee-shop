import React from "react";
import person1 from "../images/person-1.jpg";
import person2 from "../images/person-2.jpg";
import person3 from "../images/person-3.jpg";
import person4 from "../images/person-4.jpg";
import person5 from "../images/person-5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";


export default function Testimonials() {
  return (
    <section>
      <div className="testimonial">
        <div className="head-p">
          <h1>

          What Our Customers Says'
          </h1>
        </div>
         <Swiper
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 10,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 150 },
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <div className="testimonials-profile-circle">
                <img
                  src={person1}
                  alt="testimonial-avatar"
                  className="testimonial-avatar"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique praesentium voluptate natus sunt, molestiae dolorum?
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <div className="testimonials-profile-circle">
                <img
                  src={person2}
                  alt="testimonial-avatar"
                  className="testimonial-avatar"
                  loading="lazy"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, animi libero facere eligendi illo consectetur!
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <div className="testimonials-profile-circle">
                <img
                  src={person3}
                  alt="testimonial-avatar"
                  className="testimonial-avatar"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt id quaerat, quas minus cum provident?
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet.</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <div className="testimonials-profile-circle">
                <img
                  src={person4}
                  alt="testimonial-avatar"
                  className="testimonial-avatar"
                />
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque culpa suscipit, ad iure esse nihil?
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet. </h6>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <div className="testimonials-profile-circle">
                <img
                  src={person5}
                  alt="testimonial-avatar"
                  className="testimonial-avatar"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                dicta, quibusdam dolor eligendi quaerat nulla.
              </p>
              <h6 className="review-by">- Lorem ipsum dolor sit amet. </h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
