import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "../../data/products.json"; // path is correct

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Required modules
import { Navigation, Pagination } from "swiper/modules";
import { BagCard } from "../bags/BagCard";
import { Toaster } from "sonner";

export const Recommended = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    setBags(productData); // Load from local JSON
  }, []);

  return (
    <div className="my-10 md:px-10 px-2" id="recommended">
      <Toaster richColors position="top-center" />
      <h2 className="text-3xl font-semibold mb-6">Recommended</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {bags && bags.length > 0 &&
          bags.slice(4, 12).map((bag, index) => (
            <SwiperSlide key={index}>
              <BagCard bag={bag} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
