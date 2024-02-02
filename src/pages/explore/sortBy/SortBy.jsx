import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sort_by } from "../../../store/exploreSlice";

const SortBy = () => {
  const [show, setShow] = useState(false);

  // get and set value using redux
  const sortByValue = useSelector((state) => state.explore.sort_by);
  const dispatch = useDispatch();

  const setNewValue = (event) => {
    dispatch(sort_by(event.target.value));
  };

  return (
    <details className="">
      <summary
        className="flex items-center justify-between p-2 w-full text-white"
        onClick={() => setShow(!show)}
      >
        <h3 className=" font-bold text-base flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
          <span>Sort</span>
        </h3>
        <span className="cursor-pointer">
          {show ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </span>
      </summary>
      <div>
        <div className="px-4 py-2">
          <form>
            <label htmlFor="sort_by" className="font-semibold text-sm ">
              Sort Results By
            </label>
            <div className="mt-2 bg-blue-500/90 text-white font-Roboto rounded-md p-2">
              <select
                name="sort_by"
                id="sort_by"
                value={sortByValue}
                className=" text-sm font-medium bg-transparent outline-none "
                onChange={setNewValue}
              >
                <option className="text-black " value="popularity.desc">
                  Popularity Descending
                </option>
                <option className="text-black " value="popularity.asc">
                  Popularity Ascending
                </option>
                <option className="text-black " value="vote_average.desc">
                  Rating Descending
                </option>
                <option className="text-black " value="vote_average.asc">
                  Rating Ascending
                </option>
                <option
                  className="text-black "
                  value="primary_release_date.desc"
                >
                  Release Date Descending
                </option>
                <option
                  className="text-black "
                  value="primary_release_date.asc"
                >
                  Release Date Ascending
                </option>
                <option className="text-black " value="title.asc">
                  Title (A-Z)
                </option>
                <option className="text-black " value="title.desc">
                  Title (Z-A)
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </details>
  );
};

export default SortBy;
