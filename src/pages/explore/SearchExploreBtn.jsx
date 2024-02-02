import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchApi from "../../utils/fetchApi";
import { exploreLoadData, exploreQuery } from "../../store/homeSlice";


const SearchExploreBtn = () => {
  const [toggleSearchBtn, setToggleSearchBtn] = useState(false);

  const { mediaType } = useParams();
  const dispatch = useDispatch();
  
  const getAllinitialState = useSelector((state) => state.explore);
  const searchBtn = useRef();
  
  const searchNewData = () => {
    const searchFilters = {...getAllinitialState};
    if (mediaType === "movie") {
      searchFilters["air_date.gte"] = "";
      searchFilters["air_date.lte"] = "";
      searchFilters["first_air_date.gte"] = "";
      searchFilters["first_air_date.gte"] = "";
    } else {
      searchFilters["release_date.gte"] = "";
      searchFilters["release_date.lte"] = "";
    }
    
    
    // this functiion change code like a=somestring&b=42&c=false
    function convertToQueryString(obj) {
      const queryString = Object.keys(obj)
        .map((key) => `${key}=${obj[key]}`)
        .join('&');
      return queryString;
    }
    
    const queryString = convertToQueryString(searchFilters);
    dispatch(exploreQuery(`/discover/${mediaType}?${queryString}`))
    fetchApi(`/discover/${mediaType}?${queryString}`).then((res) => dispatch(exploreLoadData(res)))
    
    
    searchBtn.current.disabled = true;
    setToggleSearchBtn(false);
  };

  useEffect(() => {
    if (searchBtn.current.disabled) {
      searchBtn.current.disabled = false;
      setToggleSearchBtn(true);
    }


    if (searchBtn.current.dataset.typeDisabled === "true"){
      searchBtn.current.dataset.typeDisabled = "false";
      searchBtn.current.disabled = true;
      setToggleSearchBtn(false);
    }
  }, [getAllinitialState]);
  
  return (
    <div
      className={` rounded-lg z-50 select-none ${ toggleSearchBtn && "sticky -bottom-2 "}`}
    >
      <button
        ref={searchBtn}
        className="text-xl py-2 w-full rounded-lg bg-blue-600  disabled:bg-gray-400 text-white"
        onClick={searchNewData}
        data-type-disabled = "true"
      >
        Search
      </button>
    </div>
  );
};

export default SearchExploreBtn;
