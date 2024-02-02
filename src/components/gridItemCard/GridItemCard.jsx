import React from "react";
import Rating from "../rating/Rating";
import image from "../../assets/no-poster.jpg";
import { Link } from "react-router-dom";
import LazyImage from "../lazyLoadImage/LazyImage";

const GridItemCard = ({ item, posterImageUrl, type, className = "" }) => {
  return (
    <Link to={`/${item.media_type || type}/${item.id}`} className={` ${className} `} >
      <div className="p-2 card flex flex-col rounded-xl">
        <div className="mb-2 relative flex-shrink-0">
          <div className=" rounded-lg h-52 sm:h-64 lg:h-64 xl:72 w-full posterImg ">
            <LazyImage src={item.poster_path ? posterImageUrl + item.poster_path : image} className={' rounded-lg'} />
          </div>
          <div className="absolute right-1 -bottom-3 ">
            <Rating progress={item.vote_average && Math.round(item.vote_average * 10)} />
          </div>
        </div>
        <div className="px-2">
          <p  className="leading-relaxed text-white text-lg antialiased capitalize truncate">
            {item.title || item.name}
          </p>

          <p className="leading-relaxed text-sm text-gray-400 antialiased">
            {new Date(item.release_date || item.first_air_date ).toLocaleDateString()}
          </p>
        </div>
      </div>
  </Link>
  );
};

export default GridItemCard;

