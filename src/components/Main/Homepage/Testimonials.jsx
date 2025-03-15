import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation} from "swiper/modules";
import { Rating } from "@mui/material";
import "./Testimonials.css";

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
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 px-40 pt-20 pb-20 rounded-xl mt-20 shadow-lg">
      <h2 className="text-3xl font-semibold text-black mb-10">
        What people say about us?
      </h2>
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
            <Rating
              value={testimonial.rating}
              readOnly
              precision={0.5}
              size="medium"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="font-semibold text-sm bg-[#20b970] text-white px-4 py-2 rounded-xl mt-10 self-end mr-4 shadow-lg">
        Leave A Review
      </button>
    </div>
  );
};

export default TestimonialSlider;
