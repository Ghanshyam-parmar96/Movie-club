import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTab from "../../../components/switchTab/SwitchTab";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const posterImageUrl = useSelector((state) => state.home.posterImageUrl);
  
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  const { loading, data, error } = useFetch(`/trending/all/${endpoint}`);
 
  if (error) {
    return(
      <h1>Something Went Wrong</h1>
    )
  }
  return (
    <>
      <div className="w-11/12 mx-auto m-5 ">
        <div className="flex items-center justify-between font-Roboto mb-2">
          <h2 className="text-2xl">Trending</h2>
          <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>
        <Carousel data={data?.results} loading={loading} posterImageUrl={posterImageUrl} />
        
      </div>
    </>
  );
};

export default Trending;
