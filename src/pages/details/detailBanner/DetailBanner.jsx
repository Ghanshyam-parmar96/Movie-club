import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PlayIcon } from "../../../components/playIcon/PlayIcon";
import Rating from "../../../components/rating/Rating";
import no_poster from "../../../assets/no-poster.jpg";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import LazyImage from "../../../components/lazyLoadImage/LazyImage";
import RatingModel from "../../../components/ratingModel/RatingModel";
import LikeBtn from "../../../components/likeBtm/LikeBtn";
import SocialShare from "../../../components/socialShare/SocialShare";
import MetaData from "../../../components/metaData/MetaData";

const DetailBanner = ({ data, mediaType, id }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const posterImageUrl = useSelector((state) => state.home.posterImageUrl);
  const backDropImage = useSelector((state) => state.home.backDropImage);
  const director = data?.credits?.crew?.filter((f) => f.job === "Director");
  const writer = data?.credits?.crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "writer"
  );
  const posterImage = posterImageUrl + data?.poster_path || no_poster;
  const likedData = {
    media_type: mediaType,
    id: id,
    poster_path: data.poster_path,
    vote_average: data.vote_average,
    [mediaType === "movie" ? "title" : "name"]:
      mediaType === "movie" ? data.title : data.name,
    [mediaType === "movie" ? "release_date" : "first_air_date"]:
      mediaType === "movie" ? data.release_date : data.first_air_date,
  };

  return (
    <div
      className={`text-white overflow-hidden max-w-[1400px mx-auto ralative font-Roboto`}
    >
      <MetaData 
        title={`Movie-club | ${data?.title || data?.name} | Watch Now`} 
        description={(data?.overview).slice(0, 155) + "..."}
        url={`https://movie-club-gp.vercel.app/${mediaType}/${id}`}
        image={backDropImage + data?.backdrop_path}
      />
      <>
        <div className="w-full h-[35rem] bg-black top-0 absolute max-w-[1400px] mx-auto ">
          <img
            src={backDropImage + data?.backdrop_path}
            alt=""
            className=" w-full opacity-25  h-full object-cover object-center"
          />
          <div className=" max-w-[1400px] absolute w-full h-2/4 bottom-0 bg-gradient-to-t from-[#1e1e1e] to-transparent "></div>
        </div>
        <div className="mt-20 mb-10 mx-10 relative flex block0  items-start gap-10 flex-wrap md:flex-nowrap">
          <div className="relative flex-shrink-0  rounded-xl mx-auto  h-auto sm:h-[30rem] w-full esm:w-[20rem]">
            <LazyImage src={posterImage} className={"rounded-xl"} />
          </div>
          <div className="w-full ">
            <h2 className="text-3xl font-bold relative">
              {data?.title || data?.name} (
              {new Date(
                `${data?.release_date || data.first_air_date}`
              ).getFullYear()}
              )
            </h2>
            <em className="text-xl text-[#848b96]">{data?.tagline}</em>
            <div className=" flex items-center gap-3 my-3">
              {data?.genres?.map((item) => {
                return (
                  <span
                    key={item.id}
                    className="bg-[#da2f68] text-xs rounded-lg px-2 py-1 text-white"
                  >
                    {item.name}
                  </span>
                );
              })}
            </div>
            <div className=" flex items-center gap-6 my-6 w-full flex-wrap">
              <div className=" flex items-center gap-5">
                <div className="bg-[#1111117c] rounded-full ">
                  <Rating
                    progress={
                      data.vote_average && Math.round(data.vote_average * 10)
                    }
                    Size={85}
                    fontSize={23}
                  />
                </div>
                <div
                  className=" flex items-center gap-3 iconBtn "
                  onClick={() => {
                    if (data.videos.results[0]) {
                      setVideoId(data.videos.results[0].key);
                      setShow(true);
                    }
                  }}
                >
                  <PlayIcon hw={70} />
                  <span className="text-2xl watchText tracking-wider font-medium italic">
                    Watch Trailer
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-5 w-1/2 lg:w-auto">
                <RatingModel mediaType={mediaType} id={id} />
                <LikeBtn likedData={likedData} />
                <SocialShare
                  mediaType={mediaType}
                  id={id}
                  title={data?.title}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="md-5">{data?.overview}</p>
            <div className="flex items-center gap-5 my-5 font-bold text-lg">
              <p>
                {mediaType === "movie" ? "Release Date  " : "Last air Date  "}
                <span className="text-[#848b96] font-medium">
                  {new Date(
                    data?.release_date || data?.first_air_date
                  ).toLocaleDateString()}
                </span>
              </p>
              {mediaType === "movie" && (
                <p>
                  Runtime:{" "}
                  <span className="text-[#848b96] font-medium">{`${Math.floor(
                    parseInt(data?.runtime) / 60
                  )}h ${`${Math.floor(parseInt(data?.runtime) % 60)}`}m`}</span>
                </p>
              )}
            </div>
            {director?.length > 0 && (
              <>
                <hr className="border-[#6d6d6d]" />
                <p className="my-5">
                  <span className="text-xl font-bold">Director: </span>
                  {director?.map((d, i) => {
                    return (
                      <span key={i} className="text-[#848b96] text-lg">
                        {d.name}
                        {writer?.length - 1 !== i && ", "}
                      </span>
                    );
                  })}
                </p>
              </>
            )}
            {writer?.length > 0 && (
              <>
                <hr className="border-[#6d6d6d]" />
                <p className="my-5">
                  <span className="text-xl font-bold">Writer: </span>
                  {writer?.map((d, i) => {
                    return (
                      <span key={i} className="text-[#848b96] text-lg">
                        {d.name}
                        {writer?.length - 1 !== i && ", "}
                      </span>
                    );
                  })}
                </p>
              </>
            )}
          </div>
        </div>
      </>

      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default DetailBanner;
