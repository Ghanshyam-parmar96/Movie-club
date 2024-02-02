import avatar from "../../../assets/avatar.jpg";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import LazyImage from "../../../components/lazyLoadImage/LazyImage";

const TopCast = ({ data }) => {
  const topCastImage = useSelector((state) => state.home.topCastImage);
  const swiperBtn = {
    height : "40px",
    width : "40px",
  }

  if (data.length <= 0) return;
  return (
    <>
      <div className=" flex items-center w-11/12  mx-auto justify-between font-Roboto">
        <h2 className="text-2xl ">Top Cast</h2>
      </div>
      <Swiper
        speed={1000}
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={10}
        loop={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          // when window width is >= 460px
          460: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
            slidesPerGroup: 3,
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 6,
            slidesPerGroup: 3,
          },
          // when window width is >= 1240px
          1240: {
            slidesPerView: 7,
            slidesPerGroup: 4,
          },
        }}
        modules={[Navigation]}
        className="mt-5 w-11/12  mx-auto "
      >
        {data?.map((item) => {
          const image = !item.profile_path
            ? avatar
            : topCastImage + item.profile_path;
          return (
            <SwiperSlide key={item.id} className="flex flex-col items-center">
              <LazyImage
                src={image}
                className={
                  " rounded-3xl object-cover object-center h-44 w-96 sm:h-48 lg:h-52  "
                }
              />
              <h3 className="text-lg truncate font-bold leading-5 text-center mt-2 ">
                {item.name}
              </h3>
              <p className="text-[#adadad] mt-1 truncate leading-5">
                {item.character}
              </p>
            </SwiperSlide>
          );
        })}
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
    </>
  );
};

export default TopCast;
