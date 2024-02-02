import React, { useEffect, useState } from "react";
import DoubleRangeSlider from "../../../../components/doubleRangeSlider/DoubleRangeSlider";
import { useDispatch } from "react-redux";
import {
  with_runtime_gte,
  with_runtime_lte,
} from "../../../../store/exploreSlice";

const Runtime = () => {
  const [initialMount, setInitialMount] = useState(false);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(405);
  
  const dispatch = useDispatch();

  useEffect(() =>{
    if (initialMount) {
      dispatch(with_runtime_gte(minVal));
      dispatch(with_runtime_lte(maxVal));
    } else {
      setInitialMount(true)
    }

  },[minVal, maxVal, setInitialMount])


  const dot = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26,
  ];
  return (
    <div className=" mt-5 mb-12">
      <h3 className=" ml-3 mb-2 font-bold text-base text-[#ab0000]">
        Run Time
      </h3>
      <div className="relative">
        <div className="flex items-end px-6  justify-between">
          {dot.map((item) =>
            item === 0 || item === 8 || item === 16 || item === 24 ? (
              <span
                key={item}
                className="w-[2px]  h-2  inline-block bg-white relative"
              >
                {" "}
                <span className={`absolute top-5 -left-3 ${item === 0 ? "ml-2" : ""}`}>{item * 15}</span>
              </span>
            ) : (
           null
            )
          )}
        </div>
        <DoubleRangeSlider
          min={0}
          max={405}
          width={200}
          step={15}
          minVal={minVal}
          maxVal={maxVal}
          setMinVal={setMinVal}
          setMaxVal={setMaxVal}
        />
      </div>
    </div>
  );
};

export default Runtime;
