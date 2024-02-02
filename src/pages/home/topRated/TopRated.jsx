import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTab from "../../../components/switchTab/SwitchTab";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const posterImageUrl = useSelector((state) => state.home.posterImageUrl);
  
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movie" ? "movie" : "tv");
  };
  
  const { loading, data, error } = useFetch(`/${endpoint}/top_rated`);
  
  
  if (error) {
    return(
      <h1>Something Went Wrong</h1>
    )
  }
  return (
    <>
      <div className="w-11/12 mx-auto my-5 ">
        <div className=" flex items-center justify-between font-Roboto mb-2">
          <h2 className="text-2xl">Top Rated</h2>
          <SwitchTab data={["Movie", "Tv Show"]} onTabChange={onTabChange} />
        </div>
        <Carousel data={data?.results} loading={loading} posterImageUrl={posterImageUrl} type={endpoint} />
        
      </div>
    </>
  );
};

export default TopRated;
