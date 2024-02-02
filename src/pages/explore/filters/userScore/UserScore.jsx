import React, { useEffect, useState } from "react";
import DoubleRangeSlider from "../../../../components/doubleRangeSlider/DoubleRangeSlider";
import { useDispatch } from "react-redux";
import {
  vote_average_gte,
  vote_average_lte,
} from "../../../../store/exploreSlice";

const UserScore = () => {
  const [initialMount, setInitialMount] = useState(false);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialMount) {
      dispatch(vote_average_gte(Math.ceil(minVal / 100)));
      dispatch(vote_average_lte(Math.floor(maxVal / 100)));
    } else {
      setInitialMount(true);
    }
  }, [minVal, maxVal, setInitialMount]);

  return (
    <div className=" mt-5 mb-12">
      <h3 className=" ml-3 mb-4 font-bold text-base text-[#ab0000]">
        User Score
      </h3>
      <div className="relative">
        <div className="flex items-end px-4 mb-1">
          <span key={1} className="w-1  h-2 ml-[6px]  inline-block bg-white relative">
            {" "}
            <span className="absolute top-7 -left-1">0</span>
          </span>
          <span
            key={2}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={3}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={4}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={5}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={6}
            className="w-1 ml-[15px] h-2  inline-block bg-white relative"
          >
            {" "}
            <span className="absolute top-7 -left-1">5</span>
          </span>
          <span
            key={7}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={8}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={9}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={10}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
          <span
            key={11}
            className="w-1 ml-[15px] h-2  inline-block bg-white relative"
          >
            {" "}
            <span className="absolute top-7 -left-1">10</span>
          </span>
        </div>
        <DoubleRangeSlider
          min={0}
          max={1000}
          width={200}
          step={100}
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
        />
      </div>
    </div>
  );
};

export default UserScore;
