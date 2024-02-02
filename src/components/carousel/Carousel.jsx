import React from "react";
import ItemCard, { ItemCardLoading } from "../itemCard/ItemCard";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = ({ posterImageUrl, data, loading, type }) => {
  const swiperBtn = {
    height : "40px",
    width : "40px",
  }
  return (
    <div className="relative flex items-center overflow-hidden ">
      <Swiper
        speed={1000}
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={10}
        freeMode={true}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // loop={true}
        breakpoints={{
          // when window width is >= 460px
          460: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 5,
            slidesPerGroup: 3,
          },
          // when window width is >= 1100px
          1100: {
            slidesPerView: 6,
            slidesPerGroup: 4,
          },
        }}
        modules={[Navigation, FreeMode]}
        className="h-full w-full relative mt-2"
      >
        {!loading ? (
          data?.map((item) => (
            <SwiperSlide key={item.id} className="mt-3">
              <ItemCard
                item={item}
                posterImageUrl={posterImageUrl}
                type={type}
              />
            </SwiperSlide>
          ))
        ) : (
          <div className="flex items-center gap-3">
            {[...Array(10).fill(1)].map((e, i) => (
              <SwiperSlide key={i}>
                <ItemCardLoading />
              </SwiperSlide>
            ))}
          </div>
        )}
        <div className="swiper-button-prev" style={swiperBtn}>
          <span
            className="bg-black/80 rounded-full  text-[#8cb1d4] p-2 hover:bg-black hover:text-[#96c3ed] hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="swiper-button-next" style={swiperBtn}>
          <span
            className="svgArrow bg-black/80 rounded-full  text-[#8cb1d4] p-2 hover:bg-black hover:text-[#96c3ed] hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
