import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import LazyImage from "../lazyLoadImage/LazyImage";
import { PlayIcon } from "../playIcon/PlayIcon";

const VideoSlider = ({ data, loading = false, setVideoId, setShow }) => {

  const swiperBtn = {
    height : "40px",
    width : "40px",
  }

  return (
    <Swiper
      speed={1000}
      slidesPerView={1}
      slidesPerGroup={1}
      spaceBetween={10}
      loop={false}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        // when window width is >= 460px
        460: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          slidesPerGroup: 2,
        },
        // when window width is >= 900px
        900: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        // when window width is >= 1240px
        1240: {
          slidesPerView: 4,
          slidesPerGroup: 3,
        },
      }}
      modules={[Navigation]}
      className=""
    >
      {!loading ? (
        data?.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="relative overflow-hidden h-full w-full after:content-[''] after:rounded-lg after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent after:left-0 after:bottom-0 "
              onClick={() => {
                setVideoId(item.key);
                setShow(true);
              }}
            >
              <div
                className="h-full w-full "
              >
                <LazyImage
                  src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                  className={"rounded-xl h-48 esm:h-36 sm:h-32 md:h-40 w-[500px] xl:h-48 object-cover object-center "}
                />
              </div>
              <span className="absolute z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                <PlayIcon />
              </span>
              <p className="text-base text-white/70 tracking-wide truncate bottom-1 left-2 absolute right-0 z-20">
                {" "}
                {item.name}
              </p>
            </SwiperSlide>
          );
        })
      ) : (
        [...Array(10).fill(1)].map((e, i) => <SwiperSlide key={i} className="h-32 w-full rounded-xl bg-slate-600 " ></SwiperSlide>)
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
  );
};

// export {SliderSlide};

export default VideoSlider;

// : totalWidth.scrollLeft + totalWidth.offsetWidth;
