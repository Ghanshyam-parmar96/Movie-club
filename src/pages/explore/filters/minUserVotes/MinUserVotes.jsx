import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { vote_count_gte } from "../../../../store/exploreSlice";

const MinUserVotes = () => {
  const [value, setValue] = useState(0);
  const [initialMount, setInitialMount] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialMount) {
      dispatch(vote_count_gte(value));
    } else {
      setInitialMount(true);
    }
  }, [value, setInitialMount]);

  return (
    <div className=" mt-5 mb-12">
      <h3 className=" ml-3 mb-4 font-bold text-base text-[#ab0000]">
        Minimum User Votes
      </h3>
      <div className="flex items-end px-5 mb-1">
        <span key={1} className="w-1  h-2 ml-1 inline-block bg-white relative">
          {" "}
          <span className="absolute top-5 -left-1">0</span>
        </span>
        <span
          key={2}
          className="w-1 ml-[15px] h-1 inline-block bg-white"
        ></span>
        <span
          key={3}
          className="w-1 ml-[15px] h-1  inline-block bg-white relative"
        >
          {" "}
          <span className="absolute top-3 -left-4"></span>
        </span>
        <span
          key={4}
          className="w-1 ml-[15px] h-1 inline-block bg-white"
        ></span>
          <span
            key={6}
            className="w-1 ml-[15px] h-1 inline-block bg-white"
          ></span>
        <span
          key={5}
          className="w-1 ml-[15px] h-2  inline-block bg-white relative"
        >
          {" "}
          <span className="absolute top-5 -left-4">250</span>
        </span>
        <span
          key={7}
          className="w-1 ml-[15px]  h-1  inline-block bg-white relative"
        >
          {" "}
          <span className="absolute top-3 -left-4"></span>
        </span>
        <span
          key={8}
          className="w-1 ml-[15px] h-1 inline-block bg-white"
        ></span>
        <span
          key={9}
          className="w-1 ml-[15px] h-1  inline-block bg-white relative"
        >
          {" "}
          <span className="absolute top-3 -left-4"></span>
        </span>
        <span
          key={10}
          className="w-1 ml-[15px] h-1 inline-block bg-white"
        ></span>
        <span
          key={11}
          className="w-1 ml-[15px] h-2  inline-block bg-white relative"
        >
          {" "}
          <span className="absolute top-5 -left-6">500</span>
        </span>
      </div>
      <div className="w-[200px]  mx-auto flex items-center justify-center relative">
        <input
          type="range"
          min={0}
          max={500}
          step={50}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-full pointer-events-none absolute h-0 outline-none z-20 bg-[#3b82f6] mx-auto thumb"
        />
        <div className={`relative w-[200px] `}>
          <div className="absolute rounded h-1 bg-[#ced4da] w-full z-0" />
          <div
            style={{ width: value / 500 * 100 + "%" }}
            className="absolute rounded h-1 bg-[#3b82f6] z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default MinUserVotes;
