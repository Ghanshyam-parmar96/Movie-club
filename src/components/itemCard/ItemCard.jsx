import React from "react";
import Rating from "../rating/Rating";
import image from "../../assets/no-poster.jpg";
import { Link } from "react-router-dom";
import LazyImage from "../lazyLoadImage/LazyImage";


const ItemCard = ({ item, posterImageUrl, type}) => {

  return (
    <Link to={`/${item.media_type || type}/${item.id}`}>
      <div className="w-960 relative p-2 card  flex flex-col rounded-xl">
        <div className="mb-2 relative">
          <div className=" rounded-lg flex-shrink-0 w-full">
            <LazyImage src={item.poster_path ? posterImageUrl + item.poster_path : image} className={' h-48 sm:h-52 md:h-56 lg:h-64 w-96 rounded-lg'} />
          </div>
          <div className="absolute right-1 -bottom-3 ">
            <Rating progress={item.vote_average && Math.round(item.vote_average * 10)} />
          </div>
        </div>
        <div className="px-2">
          <p title={item.title || item.name} className="leading-relaxed text-white text-lg antialiased capitalize truncate">
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

export default ItemCard;




// loading Card
export const ItemCardLoading = () => {
  return <>
  <div className="relative p-2 card w-full shrink-0 flex flex-col rounded-xl">
    <div className="mb-2 relative">
      <div className="h-48 py-6 sm:h-52 md:h-56 lg:h-64 rounded-lg flex-shrink-0  bg-slate-600">
      </div>
      <div className="absolute right-1 -bottom-3 bg-slate-700 h-12 w-12 rounded-3xl">
      </div>
    </div>
    <div className="px-5">      
      <div className="h-2 w-3/4 my-3 bg-slate-600">
      </div>
      <div className="h-2 w-2/4 my-3 bg-slate-600">
      </div>
    </div>
  </div>
</>;
};
