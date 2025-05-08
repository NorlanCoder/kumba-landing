import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div className="w-full px-4 md:w-[90%] xl:w-[80%] mx-auto mt-16">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="border-2 border-[#c0976b] rounded-3xl md:rounded-[6rem] p-4 md:p-8 flex flex-col justify-between items-center text-center min-h-[345px]">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-sm md:text-base bg-[#c0976b] w-full h-full flex items-center justify-center">
                    {testimonial.name.charAt(0)}
                  </span>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                {testimonial.name}
              </h3>
              <p className="mb-2 md:mb-4 text-sm md:text-base">
                {testimonial.title}
              </p>
              <p className="text-xs md:text-sm">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
