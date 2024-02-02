import React, { useEffect, useRef, useState } from "react";
import poster from "../../../assets/no-poster.jpg";
import ReactPlayer from "react-player/youtube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Link, useLoaderData } from "react-router-dom";
import fetchApi from "../../../utils/fetchApi";
import { useSelector, useDispatch } from "react-redux";
import LazyImage from "../../../components/lazyLoadImage/LazyImage";
import { metaImage } from "../../../store/homeSlice";
import GPImage from '../../../assets/GP_image.jpg';

const HeroSection = () => {
  const [selected, setSelected] = useState({});
  const [showOwnerBio, setShowOwnerBio] = useState(false);
  const [trailerVideo, setTrailerVideo] = useState({});
  const div_width = useRef();
  const totelWidth = div_width?.current?.offsetWidth;
  const data = useLoaderData();
  const dispatch = useDispatch();
  const backDropImage = useSelector((state) => state.home.backDropImage);
  const posterImageUrl = useSelector(
    (state) => state.home.heroSectionPosterImageUrl
  );
  const heroSectionBackDropImage = useSelector(
    (state) => state.home.heroSectionBackDropImage
  );

  const swiperBtn = {
    height: "40px",
    width: "40px",
  };

  const StrongTag = () => {
    return <strong className="text-[#e7dd54] font-extrabold ">/</strong>;
  };

  useEffect(() => {
    const randomData = data.results[Math.floor(Math.random() * 20)];
    setSelected(randomData);
    dispatch(metaImage(randomData.backdrop_path));
    const videos = fetchApi(`/movie/${randomData.id}/videos`).then((res) => {
      if (res.results.length > 0){
        setTimeout(() => {
          setTrailerVideo(res.results[0])
        }, 5000);
      }
    });
  }, []);

  return (
    <div
      className={`w-full h-[600px] max-w-[1400px] mx-auto overflow-hidden relative after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-black after:to-transparent  `}
    >
      <div className="absolute w-full h-full posterImg opacity-70">
        <LazyImage
          src={
            selected?.backdrop_path && backDropImage + selected?.backdrop_path
          }
          className="object-cover object-center inline-block h-full w-full"
        />
      </div>
      <div className="absolute 0z-10 w-[300%] h-[110%] -top-10 -left-1/3 sm:w-[150%] sm:h-[120%] sm:-top-16 lg:w-full lg:h-[130%] lg:-top-24 lg:-left-0">
        {trailerVideo.key && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerVideo.key}`}
            controls={false}
            muted={true}
            width="100%"
            height="100%"
            playing={true}
            loop={true}
          />
        )}
      </div>
      <div className="absolute z-10 text-white top-44 left-3 sm:left-10 w-11/12">
        <h1 className="text-2xl md:text-3xl font-Inter font-bold truncate">
          {selected?.title}{" "}
          <span className="font-semibold">
            (
            {selected.release_date &&
              new Date(selected?.release_date).getFullYear()}
            )
          </span>{" "}
        </h1>
        <p className="w-full 0break-all md:w-2/4 text-sm md:text-base font-extralight font-poppins text-overflow-home">
          {selected?.overview}
        </p>
        <div className="flex items-start mt-2">
          <h5 className="text-sm bg-sky-600 rounded px-1 mr-2">TRAILER</h5>
          <h4 className="text-sm mr-2">
            {selected.release_date &&
              new Date(selected?.release_date).getFullYear()}
            {/* {new Date(selected?.release_date).getFullYear()} */}
          </h4>
          <h3 className="flex items-center gap-1 text-sm">
            <span className="text-sm bg-sky-600 rounded px-1">TMDB</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm font-semibold">
              {selected?.vote_average?.toFixed(1)}
            </span>
          </h3>
        </div>
      </div>
      <div
        className="absolute h-14 w-14 rounded-full z-10 border-2 grid place-items-center border-[#99c0e5] top-16 right-4 lg:right-8 cursor-pointer"
        onClick={() => setShowOwnerBio((prev) => !prev)}
      >
        <LazyImage
          src={GPImage}
          className="rounded-full object-cover object-center h-12 w-12"
        />
      </div>
      {showOwnerBio && (
        <>
          {/* component */}
          {/* This is an example component */}
          <div className="flex items-center justify-center w-64 absolute top-28 right-4 esm:right-10 z-20 ">
            <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
              <div className="pb-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex justify-center relative ">
                    <div className="absolute h-36 w-36 rounded-full -left-16 bottom-0 translate-y-1/2 bg-white">
                      <LazyImage
                        src={GPImage}
                        className="rounded-full min-h-full min-w-full object-cover object-center border-8 border-white h-36 w-36"
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-16 text-center">
                  <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">
                    Ghanshyam Parmar
                  </h3>
                  <div className="text-xs font-semibold text-gray-600 dark:text-gray-300 font-mono ">
                    Full Stack Web Developer <StrongTag /> React Developer
                    Font-ent Developer <StrongTag /> MERN Stack <StrongTag />{" "}
                    React js Next js <StrongTag /> Node js <StrongTag /> Express
                    Js <StrongTag /> MongoDB JavaScript <StrongTag /> HTML 5{" "}
                    <StrongTag /> CSS 3 <StrongTag /> Tailwind CSS <br /> Git &
                    GitHub
                  </div>

                  <div className="w-full text-center">
                    <div className="flex justify-center pt-4 pb-0 lg:pt-4">
                      <div className="flex space-x-2">
                        <Link
                          className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                          to="https://github.com/Ghanshyam-parmar96"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6 overflow-visible fill-current"
                            alt=""
                            aria-hidden="true"
                            viewBox="0 0 140 140"
                          >
                            <path d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z" />
                          </svg>
                        </Link>
                        <Link
                          className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                          to="https://www.linkedin.com/in/ghanshyam-parmar96"
                          target="_blank"
                        >
                          <svg
                            className="w-6 h-6 overflow-visible fill-current"
                            alt=""
                            aria-hidden="true"
                            viewBox="0 0 140 140"
                          >
                            <path d="M23.4 44.59h-4.75a12.76 12.76 0 00-9.73 2.19 9.44 9.44 0 00-2.35 7.12V131a9.08 9.08 0 002.3 7 9.24 9.24 0 006.82 2c2.22 0 4.15-.21 8.24-.06a12 12 0 009.25-2 9.1 9.1 0 002.29-7V53.9a9.44 9.44 0 00-2.34-7.12 12.68 12.68 0 00-9.73-2.19zM21 0A16.19 16.19 0 005.09 15.6 16.52 16.52 0 0021 31.86 16.12 16.12 0 0037 15.6 16.18 16.18 0 0021 0zM99.74 43.63a31.09 31.09 0 00-20.93 6.3A7.25 7.25 0 0077 46.34a6.08 6.08 0 00-4.52-1.78 119.08 119.08 0 00-15 .3c-4.16.84-6.18 3.79-6.18 9V131a9.14 9.14 0 002.28 7 12.06 12.06 0 009.26 2c4.47-.17 5.74.06 8.22.06a9.26 9.26 0 006.83-2 9.12 9.12 0 002.3-7V89.88A12.48 12.48 0 0192.93 76 12.44 12.44 0 01106 89.88V131a9.1 9.1 0 002.29 7 12 12 0 009.24 2c1.83-.07 4-.07 5.8 0a12.09 12.09 0 009.26-2 9.14 9.14 0 002.28-7V78.32a33.07 33.07 0 00-35.13-34.69z" />
                          </svg>
                        </Link>
                        <Link
                          className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                          to="/"
                          // target="_blank"
                        >
                          <svg
                            className="w-6 h-6 overflow-visible fill-current"
                            alt=""
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                  <div className="absolute flex -space-x-12 rounded-b-2xl">
                    <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10" />
                    <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20" />
                    <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30" />
                    <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40" />
                    <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <section
        ref={div_width}
        className="h-auto w-full group/section px-4 sm:px-11 absolute bottom-5 text-white z-10 "
      >
        <h2 className="text-lg font-semibold ">Upcoming movies...</h2>
        <Swiper
          speed={1000}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={10}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // loop={true}
          breakpoints={{
            // when window width is >= 480px
            480: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              slidesPerGroup: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6,
              slidesPerGroup: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 7,
              slidesPerGroup: 4,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 8,
              slidesPerGroup: 4,
            },
          }}
          modules={[Navigation, FreeMode, Autoplay]}
          className="h-full w-full relative mt-2"
        >
          {data?.results?.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="relative h-440 w-full group/card rounded-lg hover:lg:min-w-[250px] hover:md:min-w-[200px]"
              >
                <Link to={`/movie/${item.id}`}>
                  <LazyImage
                    src={
                      item.poster_path
                        ? posterImageUrl + item.poster_path
                        : poster
                    }
                    className="rounded-lg h-48 w-52"
                  />

                  {/* hover background image and details  */}
                  {totelWidth > 700 && (
                    <div className="w-full h-full group-hover/card:md:opacity-100 absolute rounded-lg left-0 top-0 z-20 opacity-0 transition duration-300 ease-linear after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-t after:from-black/80 after:to-transparent after:left-0 after:bottom-0 after:z-10">
                      <LazyImage
                        src={
                          item.backdrop_path
                            ? heroSectionBackDropImage + item.backdrop_path
                            : poster
                        }
                        className="h-48 w-full -z-30 object-center relative object-cover rounded-lg"
                      />
                      <div className="flex absolute bottom-2 left-2 z-20">
                        <div>
                          <h2 className="text-base font-bold w-24 truncate ">
                            {item.title}
                          </h2>
                          <p className="text-xs text-white/60">
                            {item.release_date}
                          </p>
                        </div>
                        <h3 className="flex items-center self-end gap-1 text-sm">
                          <span className="text-xs bg-sky-600 rounded px-1">
                            TMDB
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-3 h-3"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span className="text-xs font-bold">
                            {item.vote_average?.toFixed(1)}
                          </span>
                        </h3>
                      </div>
                    </div>
                  )}
                </Link>
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-prev" style={swiperBtn}>
            <span className="bg-black/80 rounded-full  text-[#8cb1d4] p-2 hover:bg-black hover:text-[#96c3ed] hidden md:block">
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
            <span className="svgArrow bg-black/80 rounded-full  text-[#8cb1d4] p-2 hover:bg-black hover:text-[#96c3ed] hidden md:block">
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
      </section>
    </div>
  );
};

export default HeroSection;
