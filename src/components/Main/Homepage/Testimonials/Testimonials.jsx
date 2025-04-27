import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Rating } from "@mui/material";
import LeaveReview from "./components/LeaveReview";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TestimonialSlider = () => {
  const { t, i18n } = useTranslation("global");
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const testimonials = [
    {
      name: t("testimonials.list.0.name"),
      date: t("testimonials.list.0.date"),
      rating: 5,
      description: t("testimonials.list.0.description"),
    },
    {
      name: t("testimonials.list.1.name"),
      date: t("testimonials.list.1.date"),
      rating: 5,
      description: t("testimonials.list.1.description"),
    },
    {
      name: t("testimonials.list.2.name"),
      date: t("testimonials.list.2.date"),
      rating: 4.5,
      description: t("testimonials.list.2.description"),
    },
    {
      name: t("testimonials.list.3.name"),
      date: t("testimonials.list.3.date"),
      rating: 5,
      description: t("testimonials.list.3.description"),
    },
    {
      name: t("testimonials.list.4.name"),
      date: t("testimonials.list.4.date"),
      rating: 5,
      description: t("testimonials.list.4.description"),
    },
    {
      name: t("testimonials.list.5.name"),
      date: t("testimonials.list.5.date"),
      rating: 4.5,
      description: t("testimonials.list.5.description"),
    },
    {
      name: t("testimonials.list.6.name"),
      date: t("testimonials.list.6.date"),
      rating: 5,
      description: t("testimonials.list.6.description"),
    },
  ];
  
  return (
    <div
      id="testimonials"
      className="flex flex-col justify-center items-center bg-gray-200 px-40 pt-20 pb-20 rounded-xl mt-20 shadow-lg"
    >
      <div className="flex justify-center items-center flex-col mb-10 gap-2">
        <h2 className="text-3xl font-semibold text-black">
        {t("testimonials.heading")}
        </h2>
        <p className="text-center font-medium text-sm text-gray-700">
        {t("testimonials.text")}
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={60}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation
        className="w-full max-w-6xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="bg-white p-6 mb-14 rounded-xl shadow-lg w-full"
          >
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600 mb-10">{testimonial.description}</p>
            <Rating value={testimonial.rating} readOnly precision={0.5} size="medium" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="font-semibold text-sm bg-[#22c55e] text-white px-4 py-2 rounded-xl mt-4 self-end mr-4 shadow-lg hover:scale-105 transition-transform duration-300"
        onClick={() => setIsReviewOpen(true)}
      >
        {t("testimonials.button")}
      </button>
      {isReviewOpen && <LeaveReview onClose={() => setIsReviewOpen(false)} />}
    </div>
  );
};

export default TestimonialSlider;

