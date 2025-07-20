import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import getImgUrl from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className="my-10 md:px-10 px-2" id="blogs">
      <h2 className="text-3xl font-semibold mb-6">Blogs</h2>

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
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="mySwiper">
        <div>
          {blog.length > 0 &&
            blog.map((content, index) => (
              <SwiperSlide key={index}>
                <Link to={`blogs/${content.title}`}>
                  <div className="flex flex-col sm:flex-row items-center">
                    <div>
                      <h3 className="text-lg font-medium  hover:text-primary">
                        {content.title}
                      </h3>
                      <div className="w-10 h-2 bg-primary my-4"></div>
                      <p className="text-sm text-gray-500">
                        {content.description}
                      </p>
                    </div>
                    <div className="">
                      <img
                        src={getImgUrl(content.image)}
                        alt={content.title}
                        className="sm:w-full sm:h-[200px] w-4 h-[100px] object-cover "
                      />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
