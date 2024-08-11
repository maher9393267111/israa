import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";

const FeedbackSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTests = async () => {
      const url = `${baseUrl}/api/testimonials`;
      const response = await axios.get(url);
      setTestimonials(response.data.testimonials);
    };
    fetchTests();
  }, []);

  return (
    <>
      <div 
        className="feedback-with-bg-image ptb-100" 
        style={{ backgroundImage: `url(/images/feedback-bg.jpg)` }}
      >
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="feedback-slides"
          >
            {testimonials.length > 0 &&
              testimonials.map((teste) => (
                <SwiperSlide key={teste.id}>
                  <div className="single-feedback-item-box">
                    <p>{teste.description}</p>
                   
                    <div className="client-info d-flex align-items-center">
                      <img
                        src={teste.image_url}
                        className="rounded-circle"
                        alt="image"
                      />
                      <div className="title">
                        <h3>{teste.name}</h3>
                        <span>{teste.designation}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
