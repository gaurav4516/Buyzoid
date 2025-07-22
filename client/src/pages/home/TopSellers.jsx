import React, { useEffect, useState } from "react";
import { BagCard } from "../bags/BagCard";
import { Swiper, SwiperSlide } from "swiper/react";
import productData from "../../data/products.json"; // Using local data

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Required modules
import { Navigation, Pagination } from "swiper/modules";
import { Toaster } from "sonner";

const categories = ["All", "Backpack", "Duffle", "Luggage"];

export const TopSellers = () => {
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [bags, setBags] = useState([]);

  useEffect(() => {
    setBags(productData); // Load from local JSON
  }, []);

  const filteredBags =
    selectedCategories === "All"
      ? bags
      : bags.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategories.toLowerCase()
        );

  return (
    <div className="my-10 md:px-10 px-2" id="top-sellers">
      <Toaster richColors position="top-center" />
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* category filter */}
      <div className="mb-8">
        <select
          name="category"
          id="category"
          className="border bg-[#eaeaea] border-gray-400 rounded-md focus:outline-none px-4 py-2"
          onChange={(e) => setSelectedCategories(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option value={cat} key={index}>
              {cat}
            </option>
          ))}
        </select>
      </div>

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
        {filteredBags && filteredBags.length > 0 &&
          filteredBags.map((bag, index) => (
            <SwiperSlide key={index}>
              <BagCard bag={bag} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
