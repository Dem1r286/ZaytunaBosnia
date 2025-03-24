import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Rating } from "@mui/material";
import LeaveReview from "./components/LeaveReview";
import { useState } from "react";

const testimonials = [
  {
    name: "Allison O'Holleran",
    date: "7.12.2024",
    rating: 5,
    description:
      "An unforgettable experience! The agency planned the perfect itinerary, from Sarajevo’s rich history to the breathtaking landscapes of the Sutjeska National Park.",
  },
  {
    name: "Mark J.",
    date: "28.06.2024",
    rating: 5,
    description:
      "Absolutely loved our trip! Everything was well-organized, and we discovered hidden gems like the stunning waterfalls of Kravice. Highly recommend!",
  },
  {
    name: "Mark J.",
    date: "24.05.2024",
    rating: 4.5,
    description:
      "Absolutely loved our trip! Everything was well-organized, and we discovered hidden gems like the stunning waterfalls of Kravice. Highly recommend!",
  },
  {
    name: "Mark J.",
    date: "30.04.2023",
    rating: 5,
    description:
      "Absolutely loved our trip! Everything was well-organized, and we discovered hidden gems like the stunning waterfalls of Kravice. Highly recommend!",
  },
  {
    name: "Mark J.",
    date: "08.10.2024",
    rating: 5,
    description:
      "Absolutely loved our trip! Everything was well-organized, and we discovered hidden gems like the stunning waterfalls of Kravice. Highly recommend!",
  },
  {
    name: "Mark J.",
    date: "19.06.2024",
    rating: 4.5,
    description:
      "Absolutely loved our trip! Everything was well-organized, and we discovered hidden gems like the stunning waterfalls of Kravice. Highly recommend!",
  },
  {
    name: "Mark J.",
    date: "10.08.2024",
    rating: 5,
    description:
      "Absolutely loved our trip! Everything was well-organized, and we discovered hidden gems like the stunning waterfalls of Kravice. Highly recommend!",
  },
];

const TestimonialSlider = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  return (
    <div
      id="testimonials"
      className="flex flex-col justify-center items-center bg-gray-200 px-40 pt-20 pb-20 rounded-xl mt-20 shadow-lg"
    >
      <div className="flex justify-center items-center flex-col mb-10 gap-2">
        <h2 className="text-3xl font-semibold text-black">
          What people say about us?
        </h2>
        <p className="text-center font-medium text-sm text-gray-700">
          Read firsthand experiences from those who explored with us and discovered unforgettable adventures!
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
            className="bg-white p-6 rounded-xl shadow-lg w-full"
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
        className="font-semibold text-sm bg-[#22c55e] text-white px-4 py-2 rounded-xl mt-10 self-end mr-4 shadow-lg hover:scale-104 transition-transform duration-300"
        onClick={() => setIsReviewOpen(true)}
      >
        Leave A Review
      </button>
      {isReviewOpen && <LeaveReview onClose={() => setIsReviewOpen(false)} />}
    </div>
  );
};

export default TestimonialSlider;

