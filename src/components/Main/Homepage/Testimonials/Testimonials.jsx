import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Rating } from "@mui/material";
import LeaveReview from "./components/LeaveReview";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TestimonialSlider = () => {
  const { t } = useTranslation("global");
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
      style={{
        backgroundImage: `url('assets/other/background.webp')`,
        backgroundSize: "cover",
      }}
      className="select-none flex flex-col w-screen justify-center items-center px-40 xl:pb-40 xl:pt-20"
    >
      <div className="bg-white md:bg-gray-100 px-20 pt-14 pb-16 rounded-xl my-10">
        <div className="flex justify-center items-center flex-col mb-10 gap-2">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-black text-center">
           {t("testimonials.heading")}
          </h2>
          <p className="text-center font-medium text-[10px] sm:text-sm text-xs text-black">
             {t("testimonials.text")}
          </p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <Swiper
            modules={[Autoplay]}
            className="w-[300px] sm:w-[350px] md:w-[550px] lg:w-[700px] xl:w-[1000px] 2xl:w-[1200px]"
            spaceBetween={60}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="bg-gray-100 md:bg-white rounded-xl p-6 mb-2"
                style={{
                  height: "270px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-bold text-[11px] sm:text-md">
                        {testimonial.name}
                      </h3>
                      <p className="text-[11px] md:text-sm text-gray-700 sm:text-md text-xs">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-800 md:text-gray-600 mb-10 text-[11px] md:text-sm">
                    {testimonial.description}
                  </p>

                  <div className="mt-auto flex justify-start">
                    <Rating
                      value={4.4}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
          className="font-semibold text-xs md:text-sm bg-[#22c55e] text-white mt-10 px-4 py-2 rounded-xl mt-4 self-center lg:self-end mr-4 shadow-lg hover:scale-105 transition-transform duration-300"
          onClick={() => setIsReviewOpen(true)}
        >
          {t("testimonials.button")}
        </button>
        </div>
      </div>
       {isReviewOpen && <LeaveReview onClose={() => setIsReviewOpen(false)} />}
    </div>
  );
};

export default TestimonialSlider;
