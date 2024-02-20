import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";

import profilePic1 from "../../img/image1.jpeg";
import profilePic2 from "../../img/image2.jpeg";
import profilePic3 from "../../img/image3.jpeg";
import profilePic4 from "../../img/image4.jpeg";
const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "The students we hired from your institute showcased a solid grasp of UX/UI principles and contributed significantly to the success of our product development.",
    },
    {
      img: profilePic2,
      review:
        "Kudos to your institute for producing such well-prepared graduates! The students we onboarded were quick learners and seamlessly integrated into our team.",
    },
    {
      img: profilePic3,
      review:
        "We've had great experiences with your institute's trained students. Their creativity, problem-solving abilities, and work ethic set them apart in the industry.",
    },
    {
      img: profilePic4,
      review:
        "The students we hired from your institute brought fresh perspectives and innovative ideas to our projects. They added tremendous value to our team.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Client companies always get </span>
        <span>Excellent student </span>
        <span>from us...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Testimonial;